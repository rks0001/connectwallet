import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Connect from './Connect'
import '../styles/header.css'

const Header = () => {
  return (
    <>
       <header className='bighead'>
            <Navbar   variant="dark" expand="lg" collapseOnSelect>
                  
                <Navbar.Brand ><div className="logo" >Connect your Wallet 🦊</div></Navbar.Brand>
  
                
                <Navbar.Collapse id="basic-navbar-nav">
                
  
              </Navbar.Collapse>
              <Nav>
              <div className='connectbtn'><Connect/></div>
              </Nav>
              
          
            </Navbar>

            
          </header>

          

            
    </>
   
  )
}

export default Header

