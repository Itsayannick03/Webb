import './styles/footer.css'
import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <img id="img1" src="logo.png" alt="💀 Skibidi Gyatttraction 💀" className="footer-logo" />

      <div className="footer-text">
        <div className="footer-row">
          <a 
            href="https://www.google.com/maps/place/R%C3%A5dhusparken/@57.7825158,14.1641982,16z/data=!3m1!4b1!4m6!3m5!1s0x465a6deaf7be466d:0x1f6d6bf055091ad3!8m2!3d57.7825158!4d14.1667731!16s%2Fg%2F120j3cd3?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Gyatt Street 12
          </a>
          <p>💌 1337 Rizzköping</p>
          <p>📞 010-SKIBIDI-67</p>
        </div>

        <div className="footer-row">
          <p>✉️ contact@gyatttraction.sus</p>
          <p>⏰ Mon–Fri 09:00–18:00 (Sigma Time)</p>
        </div>
      </div>

      <img id="img2" src="logo.png" alt="💀 Gyatttraction Logo 💀" className="footer-logo" />
    </footer>
  )
}
