import './App.css';
import Nightmare from './unkillablenightmare';
import {useState} from 'react';
import { Howl } from 'howler';
import React from 'react';
import Haaaiiiiii from './kirb SVG media/Haaaiiiiii.mp3'

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const hai = new Howl({
    src: Haaaiiiiii,
    volume: 0.35,
    loop: false, 
  });



  return (
    <div>
      <Nightmare isHovered={isHovered} setIsHovered={setIsHovered} isClicked={isClicked} setIsClicked={setIsClicked} hai={hai}
      />
    </div>
  );
}

export default App;
