import React from 'react'
import memesData from '../memesData';

function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[randomNumber].url);
    }
  return (
    <main>
        <div className='meme'>
            <div className='inputs'>
                <input type='text' placeholder='Top Text'></input>
                <input type='text' placeholder='Bottom Text'></input>
            </div>
            <button className='new-img-btn' onClick={getMemeImage} >Get a new meme image 🖼️</button>
        </div>
    </main>
  )
}

export default Meme