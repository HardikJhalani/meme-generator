import React from 'react'
import memesData from '../memesData';

function Meme() {
    let [memeImage, setMemeImage] = React.useState('');

    function getMemeImage() {
        let len = memesData.data.memes.length;
        let random = Math.floor(Math.random() * len);
        let randomImageUrl = memesData.data.memes[random].url;
        setMemeImage(randomImageUrl);
    }

    return (
        <main>
            <div className='meme'>
                <div className='inputs'>
                    <input type='text' placeholder='Top Text'></input>
                    <input type='text' placeholder='Bottom Text'></input>
                </div>
                <button className='new-img-btn' onClick={getMemeImage} >Get a new meme image 🖼️</button>
                <div className='meme-main'>
                    <img src = {memeImage} />
                </div>
            </div>
        </main>
    )
}

export default Meme