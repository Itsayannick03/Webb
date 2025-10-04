
import '../styles/welcome.css';
import React, { useRef } from "react";


export function Welcome() {
   const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = () => {
    audioRef.current?.play(); // TS knows play() exists ✅
  };

  return (
    <div className="main">
      <img 
        className="imageBox"  
        src="logo.png" 
        alt="💀 Skibidi Aura Farming Logo 💀" 
      />

      <h1 className="welcome-title">🔥 WELCOME TO THE SKIBIDI HQ 🔥</h1>
      <p className="welcome-subtitle">
        🗣 Aura Farming • Gyatt Energy • Rizz Overflow 💯
      </p>

      <button className="welcome-btn">🚪 Enter the Rizz</button>

      {/* 🔊 Background music */}

      <button onClick={startMusic}>▶️ Play Aura</button>
       <audio ref={audioRef} loop>
        <source src="/skibidi.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
