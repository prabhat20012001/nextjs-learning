"use client"
import React from 'react'

function page({params}) {
  return (
    <div>Student details
        <h3>Name:{params.student}</h3>
    </div>
  )
}

export default page