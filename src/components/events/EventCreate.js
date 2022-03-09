import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Import EventForm:
import EventForm from './EventForm'
import { createEvent } from '../../api/events'

const EventCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createEvent(title, location, user)
      setCreatedId(res.data.event._id)

      msgAlert({
        heading: 'Event Created',
        message: `Created ${title} successfully!`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create Event',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // If user is null - Re-direct to Home Page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // If event has been created - Navigate to the Show Page
    return <Navigate to={`/events/${createdId}`}/>
  }
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Event</h3>
        <EventForm
          handleSubmit={handleSubmit}
          title={title}
          location={location}
          setTitle={setTitle}
          setLocation={ setLocation }
        />
      </div>
    </div>
  )
}

export default EventCreate
