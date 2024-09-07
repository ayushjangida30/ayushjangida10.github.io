import logo from './logo.svg';
import './App.css';
import './InfoBox.css';
import './MyMusic.css';
import React, { useState } from 'react';
import {MusicData} from './MusicData';
import MusicCard from './MusicCard';


function MyMusic() {

    return (
    <div id='music' className='music-container'>
        {
            MusicData.map((val, key) => {
                return  (
                    <MusicCard key ={key} source={val.src} />
                )
            })
        }
    </div>
    
  );
}

export default MyMusic;
