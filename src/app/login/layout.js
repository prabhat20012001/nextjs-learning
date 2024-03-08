"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function layout({children}) {
    const Pathname=usePathname()
    console.log(Pathname)
  return (
    <div>
        <ul>
            
         <li>
            <Link href="/login">Login Main</Link>
            </li>      
         <li>
         <Link href="/login/studentlogin">StudentLogin</Link>

         </li>
         <li>
         <Link href="/login/teacherlogin">TeacherLogin</Link>

         </li>


        </ul>
        {children}
    </div>
  )
}

export default layout