import React from 'react'
import Hero from '../../components/hero/Hero'
import Cform from './Cform'


function Contact() {
  return (
    <div> <Hero
    cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    title="Contact"
   />
   <Cform/>
    </div>
  )
}

export default Contact