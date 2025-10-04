import React from "react";
import '../styles/welcome.css';

export function Welcome() {
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
      <audio autoPlay loop>
        <source src="/skibidi.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
