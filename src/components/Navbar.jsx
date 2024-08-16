import React from 'react'
import logoHS from '../assets/logoHS.png'
import consulting from '../assets/consulting.png'



export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Logo visible solo en pantallas pequeñas */}
                <a className="navbar-brand d-lg-none d-flex flex-column align-items-center" href="#">
                    <img className="w-75 pb-2" src={logoHS} alt="hs" />
                    <img className="w-75" src={consulting} alt="consulting" />
                </a>

                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center">
                        <a className="nav-link" href="#">Sobre nosotros</a>
                        <a className="nav-link" href="#">AdInsurance</a>
                        {/* Logo visible solo en pantallas grandes */}
                        <a className="navbar-brand d-none d-lg-flex flex-column align-items-center mx-4" href="#">
                            <img className="w-75 pb-2" src={logoHS} alt="hs" />
                            <img className="w-75" src={consulting} alt="consulting" />
                        </a>
                        <a className="nav-link" href="#">Trabaja con nosotros</a>
                        <a className="nav-link" href="#">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
