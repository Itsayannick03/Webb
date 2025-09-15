import '/home/yyannick/Webb/Frontend/app/styles/header.css'

export function Header()
{
    return(
        <div className='mainDiv'>
            
            <img className='image'  src="logo.png" alt="Mane Attraction text" width={160} />


            <div className='buttons'>
                <a href="/">Home</a>
                <a href="">Booking</a>
                <a href="">Contact</a>
                <a href="login">Login</a>
            </div>
            <div className='logo'>
                <a href="">
                    <img src="menu.png" alt="menu" width={30} />
                </a>
            </div>
        </div>
        
        

    )
}