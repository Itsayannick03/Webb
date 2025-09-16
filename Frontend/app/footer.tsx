

import './styles/footer.css'


export function Footer()
{
    return(
        <footer className="footer">
        <img id="img1" src="logo.png" alt="Mane Attraction" className="footer-logo" />

        <div className="footer-text">
            <div className="footer-row">
            <a href="https://www.google.com/maps/place/R%C3%A5dhusparken/@57.7825158,14.1641982,16z/data=!3m1!4b1!4m6!3m5!1s0x465a6deaf7be466d:0x1f6d6bf055091ad3!8m2!3d57.7825158!4d14.1667731!16s%2Fg%2F120j3cd3?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D">Exempelgatan 12</a>
            <p>123 45 Jönköping</p>
            <p>010-123 45 67</p>
            </div>
            <div className="footer-row">
            <p>kontakt@maneattraction.se</p>
            <p>Mån–Fre 09:00–18:00</p>
            </div>
        </div>

        <img id="img1" src="logo.png" alt="Mane Attraction" className="footer-logo" />
        </footer>

    )
}