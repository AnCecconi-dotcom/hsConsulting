import React from 'react'
import ISO from '../assets/certificadoISO.png'

export const Calidad = () => {
    return (
        <div className='d-flex flex-column justify-content-center gap-5 background-circle5'>
            <h2 className='py-5'>Calidad</h2>
            <p className='centrar marginCalidad py-2'>
                Nuestros procesos de diseño y desarrollo de software a medida, mantenimiento de aplicaciones propias y de terceros y testing de sistemas informáticos están <span className='resaltado'>certificados ISO 9001:2015 y la guía IEC 90003</span> </p>
            <img src={ISO} alt="certificado ISO" className='imgCalidad py-5' />
            <div className='py-5'>
                <div class="card cardCalidad d-flex align-items-center">
                    <div class="card-body d-flex align-items-center">
                        <h6 class="resaltado"> POLITICA DE GESTION DE CALIDAD</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
