import React from 'react'
import trollImage from '../images/TrollFace.png'

function Navbar() {
  return (
    <header className='navbar'>
        <div className='left'>
            <img src={trollImage} alt = 'troller'/>
            <h3>Meme Generator</h3>
        </div>
        <p className='text'>React Course - Project 3</p>
    </header>
  )
}

export default Navbar