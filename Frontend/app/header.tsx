import './styles/header.css'

export function Header()
{
    return(
        <div className='mainDiv'>
            
            <img className='image'  src="logo.png" alt="Mane Attraction text" width={160} />


            <div className='buttons'>
                <div>
                    <a href="/">Home</a>
                </div>

                 <div >
                    <a href="">About us</a>
                </div>

                <div className='text'>
                    <a href="">Booking</a>
                </div>
                <div >
                    <a href="">Contact</a>
                </div>
                
                <div >
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