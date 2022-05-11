import React from 'react'
import Header from './Header'
import '../styles/sectionone.css'
const Section1 = () => {
  return (
    <>
    <div className='main_con'>

    <Header/>
        <div className='content'>
            Hey👋, Connect your wallet <br/>
            Check the project here 
           

        </div>
        <div className='btncon'>
        <button className='git_btn'><a className="link" href='https://github.com/rks0001/connectwallet ' target='_blank' rel="noreferrer">Github</a></button> 
        </div>
        <div className='imgsone'>
          
        </div>
    </div>
        
    </>
  )
}

export default Section1