import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactDetails from '../components/contact/ContactDetails'
import Distributors from '../components/contact/Distributors'
import ContactMap from '../components/contact/ContactMap'

const ContactPage = () => {
  return (
    <div className="">
    <ContactHero />
    <Distributors />
    <ContactForm />
    <ContactDetails />
    <ContactMap />
  </div>
  )
}

export default ContactPage;