import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deleteEvent, showEvent } from '../../api/events'

const homeStyle = {
  backgroundColor: '#264653',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  color: 'white'
}

const Event = ({ user, msgAlert }) => {
  const [event, setEvent] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  // If the user is null then redirect to the Home page
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await showEvent(id, user)
        setEvent(res.data.event)
      } catch (error) {
        msgAlert({
          heading: 'Event failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteEvent(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete the event',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // If event is null then we are loading
  if (!event) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/events/' />
  } else {
    // We have an event to display
    return (
      <div className='row' style={homeStyle}>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{event.title}</h3>
          <p>Location: {event.location}</p>
          <p>Capacity: {event.capacity}</p>
          <p>Attire: {event.attire}</p>
          <Button variant='danger' onClick={handleDeleteClick}>Delete Event</Button>
          <Link to={`/events/${id}/edit`}>
            <Button variant='primary' type='submit'>Update Event</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Event
