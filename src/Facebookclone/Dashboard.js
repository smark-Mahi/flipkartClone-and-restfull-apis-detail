import React from 'react'
import Login from './Login'
import Nav from './Nav'
import Profile from './Profile'
import Side from './Side'
const Dashboard = () => {
  return (
    <div>
      <Nav/>
      <Side/>
      <Profile/>
    </div>
  )
}

export default Dashboard
