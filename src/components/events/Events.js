import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexEvents } from '../../api/events'

const homeStyle = {
  backgroundColor: '#264653',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  color: 'white'
}

const Events = ({ user, msgAlert }) => {
  const [events, setEvents] = useState(null)

  // If user is null - Re-direct to Home Page
  // Note: Must check before useEffect since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  // Run once when the component mounts
  useEffect(() => {
    const fetchData = async (user) => {
      try {
        const res = await indexEvents(user)
        setEvents(res.data.events)
      } catch (error) {
        msgAlert({
          heading: 'Events List failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData(user)
  }, [])

  // Three States:
  if (!events) {
    // If event is `null` we are loading
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (events.length === 0) {
    // If the array of Events is empty - We have no events to show
    return <h1>No Events yet, please create one!</h1>
  } else {
    // Otherwise, display the events
    const eventsList = events.map(event => (
      <li key={event._id}>
        <Link to={`/events/${event._id}`}>{event.title}</Link>
      </li>
    ))

    return (
      <div className='row' style={homeStyle}>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Events</h3>
          <ul>{eventsList}</ul>
        </div>
      </div>
    )
  }
}

export default Events
