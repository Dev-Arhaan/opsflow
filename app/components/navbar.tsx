import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'><span className='font-semibold text-xl'>OpsFlow</span>
    <div className='space-x-16 font-medium text-lg'>
        <span>About</span>
        <span>Pricing</span>
        <span>Contact</span>
        <span>Services</span>
        </div>
    </div>
  )
}

export default Navbar