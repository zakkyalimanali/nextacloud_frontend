import React from 'react'
import { Link } from 'react-router-dom'

function PublicHome() {
  return (
    <div>
      <h1>Public Home</h1>
      <Link to='register' >Register</Link>
    </div>
  )
}

export default PublicHome
