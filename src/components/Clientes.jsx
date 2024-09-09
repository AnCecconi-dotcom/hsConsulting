import React, { useState } from 'react';
import logoGalicia from '../assets/galicia.png';
import logoholando from '../assets/holando.png';
import logoalbaCaucion from '../assets/albaCaucion.png';
import logoBestDoctors from '../assets/bestDoctors.png';
import logoMeridional from '../assets/meridional.png';
import logoRocca from '../assets/rocca.png';
import logoZurich from '../assets/zurich.png';

export const Clientes = () => {

    const [selectClient, setSelectedClient] = useState({
        image: logoGalicia,
        comment: (
            <>
                "La <span className='resaltado'>predisposición</span> a entender nuestras necesidades y mejorar el servicio"
            </>
        ),
        logoClass: ""
    });

    const clientes = [
        {
            id: 1,
            logo: logoGalicia,
            comment: (
                <>
                    "La <span className='resaltado'>predisposición</span> a entender nuestras necesidades y mejorar el servicio"
                </>
            )
        },

        {
            id: 2,
            logo: logoalbaCaucion,
            comment: (
                <>
                    "Lo más destacado de trabajar con Hs es la <span className='resaltado'>transparencia y la atención personalizada</span> que ofrecen. Su enfoque en encontrar soluciones efectivas y su compromiso con la satisfacción del cliente son realmente impresionantes"
                </>
            ),
            logoClass: 'logoAlbaCaucion'
        },
        {
            id: 3,
            logo: logoholando,
            comment: (
                <>
                    "Lo que más valoro de esta empresa es su <span className='resaltado'>capacidad de adaptarse rápidamente</span> a las necesidades cambiantes del mercado y su firme compromiso con la innovación y la excelencia en el servicio al cliente"
                </>
            ),
            logoClass: 'logoHolando'
        },
        {
            id: 4,
            logo: logoZurich,
            comment: (
                <>
                    "En primer lugar destaco la honestidad y confiabilidad de la empresa, asi como su <span className='resaltado'>vasta experiencia en materia de seguros</span> y su profesionalismo inigualable"
                </>
            )
        },
        {
            id: 5,
            logo: logoBestDoctors,
            comment: (
                <>
                    "Profesionalismo,<span className='resaltado'>actitud</span> y trabajo en equipo"
                </>
            )
        },
        {
            id: 6,
            logo: logoRocca,
            comment: (
                <>
                    "Muy buena <span className='resaltado'>atención y disposición</span> con el cliente para atender necesidades y requerimientos, resolviendo problemas con <span className='resaltado'>rapidez y efectividad</span>"
                </>
            )
        },
        {
            id: 7,
            logo: logoMeridional,
            comment: (
                <>
                    "La <span className='resaltado'>predisposición</span> a entender nuestras necesidades y mejorar el servicio"
                </>
            )
        },
    ];

    const handleClick = (cliente) => {
        setSelectedClient({
            image: cliente.logo,
            comment: cliente.comment,
            logoClass: cliente.logoClass || ""
        });
    };



    return (
        <div className='background-circle3'>
            <h2>Nuestros Clientes</h2>
            <div className='d-flex justify-content-center m-5'>
                <div className="card cardClientes d-flex flex-row gap-5 align-items-center my-5 py-5" style={{ width: '50rem', height:'15rem' }}>
                    <img src={selectClient.image} className={`card-img-top ${selectClient.logoClass}`} alt="logo" />
                    <div className="card-body">
                        <p className="card-text normal cursiva">{selectClient.comment}</p>
                    </div>
                </div>
            </div>
            <div id='clientesMap' className='d-flex justify-content-evenly align-items-center gap-5 m-5'>
                {clientes.map((cliente) => (
                    <img key={cliente.id} src={cliente.logo} className={cliente.logoClass} alt={`Logo de la empresa ${cliente.id}`} onClick={() => handleClick(cliente)} />
                ))}
            </div>
        </div>
    );
};
