import React, { useContext } from 'react'
import { UserDatacontext } from '../context/UserContext'

const Navbar = (props) => {
const    data =   useContext(UserDatacontext)
console.log(data);

  return (
    <div className='h-10 w-full bg-emerald-600'>
      <h1>this is  a Navbar</h1>
    </div>
  )
}

export default Navbar