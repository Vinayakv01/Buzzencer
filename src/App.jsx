// "use client"
import React from 'react'
import Routing from './components/routes/routes'
import InRouting from './components/routes/influencerroute'
import ORouting from './components/routes/organizationroute'
const App = () => {
  return (
    <>
      <Routing/>
      <InRouting/>
      <ORouting/>
    </>
  )
}

export default App
