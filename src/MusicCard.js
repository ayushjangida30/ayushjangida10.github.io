import React from 'react';
import { useState } from 'react';
import './MyMusic.css';

function MusicCard({source})   {
    return  (
        <div className='music-soundcloud-container'>
            <iframe width="100%" height="300" frameborder="no" allow="autoplay"
             src={source}></iframe>
        </div>
    )
}

export default MusicCard