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
                    <ul className="lista-grid">
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Audio descriptivo</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Relaciones con inversionistas</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Avisos legales</a>
                    </ul>
                    <ul className="lista-grid">
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Centro de ayuda</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Empleo</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Preferencias de cookies</a>
                    </ul>
                    <ul className="lista-grid">
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Tarjetas de relago</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Terminos de uso</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Informacion corporativa</a>
                    </ul>
                    <ul className="lista-grid">
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Prensa</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Privacidad</a>
                        <a href="codefaa.github.io/portafolio-react/" target='_blank' className="item-grid">Contactanos</a>
                    </ul>
                </nav>

                <button className="footer-boton">Código de servicio</button>
                <p className='footer-parrafo'>© 2024 DisneyPlus, Inc.</p>
            </section>
        </footer>
    )
}

export default Pie;