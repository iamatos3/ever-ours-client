import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import EventForm from './EventForm'
import { showEvent, updateEvent } from '../../api/events'

const EventEdit = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  // If user is null - Re-direct to Home Page
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await showEvent(id, user)
        setTitle(res.data.event.title)
        setLocation(res.data.event.location)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load Event',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateEvent(id, title, location, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update event',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Navigate to the Show Page
    return <Navigate to={`/events/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Event</h3>
        <EventForm
          handleSubmit={handleSubmit}
          title={title}
          location={location}
          setTitle={setTitle}
          setLocation={setLocation}
        />
      </div>
    </div>
  )
}

export default EventEdit
