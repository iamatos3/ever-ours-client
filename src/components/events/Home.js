import React from 'react'
import './Home.scss'

const Home = () => {
  const titleStyle = {
    backgroundColor: '#264653',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fae1dd'
  }

  const homeStyle = {
    backgroundColor: '#264653',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    color: 'white'
  }

  return (
    <div style={titleStyle}>
      <h1>Ever Ours</h1>
      <div style={homeStyle}>
        <h4>Create your Dream Event and share with Family + Friends!</h4>
      </div>
    </div>
  )
}

export default Home
