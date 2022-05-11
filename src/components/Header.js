import React from 'react'
import Connect from './Connect'
import '../styles/header.css'

const Header = () => {
  return (
    <>
        <div className='bighead'>
          <div className="logo" >Connect your Wallet 🦊</div>
          <div className='connectbtn'><Connect/></div>
        </div>
    
    </>
   
  )
}

export default Header

