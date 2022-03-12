import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Import EventForm:
import EventForm from './EventForm'
import { createEvent } from '../../api/events'

const homeStyle = {
  backgroundColor: '#264653',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  color: 'white'
}

const EventCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [capacity, setCapacity] = useState('')
  const [attire, setAttire] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await createEvent(title, location, capacity, attire, user)
      setCreatedId(res.data.event._id)
      console.log(res.data.event._id)

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
    <div className='row' style={homeStyle}>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Event</h3>
        <EventForm
          handleSubmit={handleSubmit}
          title={title}
          location={location}
          capacity={capacity}
          attire={attire}
          setTitle={ setTitle }
          setLocation={ setLocation }
          setCapacity={ setCapacity }
          setAttire={ setAttire }
          user={user}
        />
      </div>
    </div>
  )
}

export default EventCreate
