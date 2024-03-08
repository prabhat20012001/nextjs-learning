
import Link from 'next/link'
import React from 'react'

function StudentList() {
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            <li>
                <Link href="/studentlist/1">Anil</Link>
            </li>
            <li>
                <Link href="/studentlist/2">Prabhat</Link>
            </li>
            <li>
                <Link href="/studentlist/3">Sunil</Link>
            </li>
            <li>
                <Link href="/studentlist/4">Milki</Link>
            </li>
        </ul>
    </div>
  )
}

export default StudentList