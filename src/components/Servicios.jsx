import React from 'react';
import img1 from '../assets/testing.png';
import img2 from '../assets/manpower.png';
import img3 from '../assets/mantenimiento.png';
import img4 from '../assets/d&d.png';

export const Servicios = () => {
    return (
        <div>
            <h2 className='mt-5'>Nuestros Servicios</h2>
            <div className='d-flex flex-row align-items-center gap-3'>
                <div className='ps-5'>
                    <p className='justificado'>
                        Ofrecemos una amplia gama de servicios diseñados para <span className='resaltado'>satisfacer las necesidades tecnológicas</span> de empresas de diversos sectores. Nuestro enfoque integral y nuestra experiencia en el desarrollo e implementación de soluciones avanzadas nos permiten proporcionar un <span className='resaltado'>valor excepcional</span> a nuestros clientes.
                    </p>
                </div>
                <div>
                    <div className='d-flex flex-row gap-3 m-5'>
                        <div className="card cardServicios" style={{ width: '18rem' }}>
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="cardServicios-hover-content d-flex flex-column">
                                <h3 className='pb-2 gradient-text'>Testing de aplicaciones</h3>
                                <p>Medimos la calidad del software brindándote indicadores para que mejores la performance de tu equipo de desarrollo y la calidad de tu producto</p>
                            </div>
                        </div>
                        <div className="card cardServicios" style={{ width: '18rem' }}>
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="cardServicios-hover-content d-flex flex-column">
                                <h3 className='pb-2 gradient-text'>Manpower</h3>
                                <p>Te ayudamos a encontrar el perfil de IT que necesitas para los distintos sectores del área de sistemas</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row gap-3 m-5'>
                        <div className="card cardServicios" style={{ width: '18rem' }}>
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="cardServicios-hover-content d-flex flex-column">
                                <h3 className='pb-2 gradient-text'>Mantenimiento</h3>
                                <p>Medimos la calidad del software brindándote indicadores para que mejores la performance de tu equipo de desarrollo y la calidad de tu producto</p>
                            </div>
                        </div>
                        <div className="card cardServicios" style={{ width: '18rem' }}>
                            <img src={img4} className="card-img-top" alt="..." />
                            <div className="cardServicios-hover-content d-flex flex-column">
                                <h3 className='pb-2 gradient-text'>Diseño y desarrollo</h3>
                                <p>Te ayudamos a encontrar el perfil de IT que necesitas para los distintos sectores del área de sistemas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
