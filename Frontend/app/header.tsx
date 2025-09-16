import './styles/header.css'

export function Header()
{
    return(
        <div className='mainDiv'>
            
            <img className='image'  src="logo.png" alt="Mane Attraction text" width={160} />


            <div className='buttons'>
                <div className='button'>
                    <a href="/">Home</a>
                </div>

                 <div className='button' >
                    <a href="">About us</a>
                </div>

                <div className='button'>
                    <a href="">Booking</a>
                </div>
                <div className='button'>
                    <a href="">Contact</a>
                </div>
                
                <div className='button'>
                    <a href="login">Login</a>
                </div>

                
                

                
            </div>

            

            <div className='logo'>
                <a href="">
                    <img src="menu.png" alt="menu" width={30} />
                </a>
            </div>
        </div>
        
        

    )
}