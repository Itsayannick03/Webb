//import '/home/yyannick/Webb/Frontend/app/styles/footer.css'
import "./styles/footer.css";

export function Footer()
{
    return(
        <footer className="footer">
        <img id="img1" src="logo.png" alt="Mane Attraction" className="footer-logo" />

        <div className="footer-text">
            <div className="footer-row">
            <p>Exempelgatan 12</p>
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