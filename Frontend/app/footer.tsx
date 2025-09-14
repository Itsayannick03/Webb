import '/home/yyannick/Webb/Frontend/app/styles/footer.css'

export function Footer()
{
    return(
        <div className='footer'>
            <img className='footerLogo'  src="logo.png" alt="Mane Attraction text" width={160} />
            <div className='footerText'>
                <p>Exempelgatan 12</p>
                <p>123 45 Jönköping</p>
                <p>010-123 45 67</p>
                <p>kontakt@maneattraction.se</p>
                <p>Öppet: Mån-Fre 09:00-18:00</p>
                
  
            </div>
            <img className='footerLogo' src="logo.png" alt="Mane Attraction text" width={160} />
        </div>

    )
}