import Link from 'next/link'
import React from 'react'

function header() {
  return (
    <header>
        <div className='container mx-auto p-5 bg-blue-500'> 
            <ul className='flex  items-center justify-between'>
                <li> 
                    <Link href={"/about"}> About </Link>
                     </li>
                     <li> 
                    <Link href={"/products"}> Products </Link>
                     </li>
                     <li> 
                    <Link href={"/contact"}> Contact </Link>
                     </li>
                     
                </ul>
        </div>
    </header>
  )
}

export default header
