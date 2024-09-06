import logo from './logo.svg';
import './App.css';
import './InfoBox.css';
import './MyGame.css';
import React, { useState } from 'react';

function MyGame() {
    const [link, setLink] = useState("https://itch.io/embed-upload/10897415?color=333333");

    const handSetLink = (linkId) => {
        switch(linkId)  {
            case 1: 
                setLink("https://itch.io/embed-upload/10897347?color=333333");
                break;

            case 2:
                setLink("https://itch.io/embed-upload/10897415?color=333333");
        }
    };

    return (
    <div id='games' className='game-container'>
        <div className='mygame-heading-container'>
            <p className='mygame-name' onClick={() => handSetLink(1)}>Falling Bricks</p>
            <p className='mygame-name' onClick={() => handSetLink(2)}>Mole in a Hole</p>
        </div>
        <div className='mygame-container'>
            <iframe 
            frameborder="0" 
            src={link} 
            allowfullscreen 
            width="1000" 
            height="600">
            </iframe>
        </div>
    </div>
    
  );
}

export default MyGame;
