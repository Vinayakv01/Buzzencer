// "use client"
import React from 'react'
import Routing from './components/routes/routes'
import InRouting from './components/routes/influencerroute'
import ARouting from './components/routes/adminroute'
import ORouting from './components/routes/organizationroute'
const App = () => {
  return (
    <>
      <Routing/>
      <InRouting/>
      <ARouting/>
      <ORouting/>
    </>
  )
}

export default App
