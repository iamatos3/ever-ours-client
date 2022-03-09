/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
// AUTH
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

// EVENT Components
import Home from './components/events/Home'
import Event from './components/events/Event'
import EventCreate from './components/events/EventCreate'
import EventEdit from './components/events/EventEdit'
import Events from './components/events/Events'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />

          {/* EVENT Routes */}
          <Route path='/'
            element={<Home />} />
          <Route path='/events' element={<Events msgAlert={msgAlert} user={user} />} />
          <Route path='/events/:id' element={<Event msgAlert={msgAlert} user={user} />} />
          <Route path='/events/create' element={<EventCreate msgAlert={msgAlert} user={user} />} />
          <Route path='/events/:id/edit' element={<EventEdit msgAlert={msgAlert} user={user} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
