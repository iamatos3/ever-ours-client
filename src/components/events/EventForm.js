import React from 'react'
import { Form, Button } from 'react-bootstrap'

const EventForm = ({ handleSubmit, title, location, setTitle, setLocation, capacity, setCapacity, attire, setAttire, user }) => (
  <Form onSubmit={(event) => handleSubmit(event, user)}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='A Perfect Event'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='location'>
      <Form.Label>Location</Form.Label>
      <Form.Control
        placeholder='Location/Destination'
        name='location'
        value={location}
        onChange={event => setLocation(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='capacity'>
      <Form.Label>Capacity</Form.Label>
      <Form.Control
        placeholder='Capacity'
        name='capacity'
        value={capacity}
        onChange={event => setCapacity(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='attire'>
      <Form.Label>Attire</Form.Label>
      <Form.Control
        placeholder='Attire'
        name='attire'
        value={attire}
        onChange={event => setAttire(event.target.value)}
      />
    </Form.Group>

    <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default EventForm
