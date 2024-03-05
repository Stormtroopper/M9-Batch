import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div  className='text-muted'style={{
      fontWeight:"400",
      fontSize:"40px"
    }}>
        <h1>Welcome to the Home Page</h1><br />
        <Link  to='/circle'>Circles- Post malone</Link>
    </div>
  )
}

export default Home