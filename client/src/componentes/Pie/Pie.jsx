import './Pie.css';

function Pie() {

    return(
        <footer className='footer'>
            <section className='footer-seccion'>
                <div className="footer-red">
                    <a href="www.linkedin.com/in/facundo-garcia-312b73297" target='_blank' className="enlace-red"><i className="bi bi-facebook"></i></a>
                    <a href="www.linkedin.com/in/facundo-garcia-312b73297" target='_blank' className="enlace-red"><i className="bi bi-instagram"></i></a>
                    <a href="www.linkedin.com/in/facundo-garcia-312b73297" target='_blank' className="enlace-red"><i className="bi bi-twitter"></i></a>
                    <a href="www.linkedin.com/in/facundo-garcia-312b73297" target='_blank' className="enlace-red"><i className="bi bi-youtube"></i></a>
                </div>

                <nav className="footer-grid">

                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Audio descriptivo</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid item-media-ultimo">Relaciones con inversionistas</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Avisos legales</a>

                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid item-grid-ultimo">Centro de ayuda</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Empleo</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid item-media-ultimo">Preferencias de cookies</a>

                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Tarjetas de relago</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid item-grid-ultimo">Terminos de uso</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Informacion corporativa</a>

                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid item-media-ultimo">Prensa</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Privacidad</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid item-grid-ultimo">Contactanos</a>

                </nav>

                <button className="footer-boton">Código de servicio</button>
                <p className='footer-parrafo'>© 2024 DisneyPlus, Inc.</p>
            </section>
        </footer>
    )
}

export default Pie;