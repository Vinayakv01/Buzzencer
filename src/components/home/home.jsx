import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'
import Form from './Form'
import WhatWeDo from './WhatWeDo'
import CustomerTestimonials from './CustomerTestimonial'
import HowBuzzencerWorks from './HowBuzzencerWorks'

const home = () => {
  return (
    <div className="overflow-hidden">
      <Banner/>
      <WhatWeDo />
      <HowBuzzencerWorks/>
      <CustomerTestimonials/>
      <Form/>
    </div>
  )
}

export default home
