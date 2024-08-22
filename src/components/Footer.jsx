import React from 'react';
import dataFiscal from '../assets/dataFiscal.png';
import responsableRegistrado from '../assets/responsableRegistrado.png';
import linkedin from '../assets/linkedin.png';

export const Footer = () => {
    return (
        <div id='footer' className='d-flex align-items-center justify-content-between'>
            <div className=''>
                <ul>
                    <a href="#">
                        <li className='py-1'>Sobre nosotros</li>
                    </a>
                    <a href="#">
                        <li className='py-1'>Adinsurance</li>
                    </a>
                    <a href="#">
                        <li className='py-1'>Trabaja con nosotros</li>
                    </a>
                    <a href="#">
                        <li className='py-1'>Contacto</li>
                    </a>
                </ul>
            </div>
            <div>
                <img className='imgFooter pe-5 me-5' src={dataFiscal} alt="data fiscal" />
                <img className='imgFooter ps-5 ms-5' src={responsableRegistrado} alt="responsable registrado" />
            </div>
            <div className=''>
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
    )
}
