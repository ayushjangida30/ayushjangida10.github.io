import logo from './logo.svg';
import './App.css';
import './InfoBox.css';
import './MyMusic.css';
import React, { useState } from 'react';

function MyMusic() {

    return (
    <div id='music' className='music-container'>
        <h3 className='music-info-heading'>MY MUSIC</h3>
        <div className='music-soundcloud-container'>
            <iframe width="100%" height="300" frameborder="no" allow="autoplay"
             src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1159205971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}>
                <a href="https://soundcloud.com/ayush-jangida" title="Ayush Jangida" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Ayush Jangida</a>
                <a href="https://soundcloud.com/ayush-jangida/black-and-white" title="Black And White" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Black And White</a>
            </div>
        </div>
    </div>
    
  );
}

export default MyMusic;
