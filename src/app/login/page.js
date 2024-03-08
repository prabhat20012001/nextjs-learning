"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


function Login() {
    const router=useRouter()
    const handleClick=(name)=>{
        router.push(name)
    }
  return (
    <div>Login page

        <Link href="/contact">Go to contact</Link>
        <button className="bg-slate-400" onClick={()=>handleClick("/contact")}>button</button>
        <Link href="/login/studentlogin">Go to Student Login</Link>
        <Link href="/login/teacherlogin">Go to Student Login</Link>




    </div>
  )
}

export default Login