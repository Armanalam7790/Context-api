import React from 'react'

const Section = (props) => {
  // console.log(props.children);
  
  return (
    <div className='text-xl bg-pink-900 h-80'>
        <h1 >All Section  </h1>
        {props.children}
    </div>
  )
}

export default Section