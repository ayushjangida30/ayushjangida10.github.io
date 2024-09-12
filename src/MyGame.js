import logo from './logo.svg';
import './App.css';
import './InfoBox.css';
import './MyGame.css';
import React, { useState } from 'react';

function MyGame() {
    const [link, setLink] = useState("https://itch.io/embed-upload/10897347?color=333333");
    const [number, setNumber] = useState(1);

    const handSetLink = (linkId) => {
        switch(linkId)  {
            case 1: 
                setLink("https://itch.io/embed-upload/10897347?color=333333");
                setNumber(1);
                break;

            case 2:
                setLink("https://itch.io/embed-upload/10897415?color=333333");
                setNumber(2);
                break;
        }
    };

    return (
    <div id='games' className='game-container'>
        <div className='mygame-heading-container'>
            <p className={number === 1 ? 'mygame-name-selected' : 'mygame-name'} onClick={() => handSetLink(1)}>Falling Bricks</p>
            <p className={number === 2 ? 'mygame-name-selected' : 'mygame-name'} onClick={() => handSetLink(2)}>Mole in a Hole</p>
        </div>
        <div class="iframe-container">
            <iframe 
                src={link} 
                allowfullscreen
            ></iframe>
        </div>
    </div>
    
  );
}

export default MyGame;
