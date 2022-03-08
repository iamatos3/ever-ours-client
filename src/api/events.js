import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const indexEvents = (user) => {
  return axios.get(apiUrl + '/events/',
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// SHOW
export const showEvent = (id, user) => {
  return axios.get(`${apiUrl}/events/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// DELETE
export const deleteEvent = (id, user) => {
  return axios.delete(`${apiUrl}/events/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// UPDATE
export const updateEvent = (id, title, location, capacity, attire, user) => {
  return axios.patch(
    `${apiUrl}/events/${id}`,
    { event: { title, location, capacity, attire } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// CREATE
export const createEvent = (title, location, capacity, attire, user) => {
  return axios.patch(
    `${apiUrl}/events/`,
    { event: { title, location, capacity, attire } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
