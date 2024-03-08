import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div>Contact
      <Link href="/login">click me</Link>
      <Link href="/contact/patient">Go to Patient Page</Link>
      <Link href="/contact/doctor">Go to Doctor Page</Link>



    </div>
  )
}

export default Contact