import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
function NavBar() {
    return (
        <>
            <header id="header">
                <img id="img-header" class="animate__animated animate__fadeInLeft" src="./logo1.png"></img>


                <nav class="animate__animated animate__fadeInDownBig">
                    <ul class="menu">

                        <li><a href="#">Home</a></li>
                        <li> <a href="#">Nosotros</a></li>
                        <li> <a href="#">Carrito</a></li>
                        <li> <a href="#">Contacto</a></li>
                        <li> <a href="#">Como comprar?</a></li>

                    </ul>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>                </nav>


            </header>


        </>

    )
}

export default NavBar