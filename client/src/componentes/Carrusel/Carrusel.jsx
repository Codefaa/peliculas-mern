import './Carrusel.css';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { useEffect } from 'react';

function Carrusel() {

    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            autoplay: 3000,
            peek: {
                before: 130,
                after: 130
            },
            focusAt: 'center'
        }).mount();
    }, [])

    return (

        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide"><img className='carrusel-imagen' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D4BE8805649F3762B0E49F512C78B6012247746784D707B49E7C39F4E27CFA9A/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim" alt="" /></li>
                    <li className="glide__slide"><img className='carrusel-imagen' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F20821A9A7A0461D3BFB51F7176629A4D5A831A9F173DA69F63F9E3317D60716/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim" alt="" /></li>
                    <li className="glide__slide"><img className='carrusel-imagen' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1EEE3796056A3A162C4F2636D2B7CD8BAC739104CEE1FD54A02118D5B3A85A8E/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim" alt="" /></li>
                    <li className="glide__slide"><img className='carrusel-imagen' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8923927931247F2EDEE74DB813A8FBC3560921556F9ED4A7C1AB3523381A57B1/scale?width=1440&aspectRatio=3.91&format=jpeg" alt="" /></li>
                    <li className="glide__slide"><img className='carrusel-imagen' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A4CF45A2C4C5B34C7D4D449C033E1637EA3D2D6186FC9348F29F608BBA1D1DEF/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim" alt="" /></li>
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><i className="bi bi-chevron-left"></i></button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><i className="bi bi-chevron-right"></i></button>
            </div>

            <div class="glide__bullets" data-glide-el="controls[nav]">
                <button class="glide__bullet" data-glide-dir="=0"></button>
                <button class="glide__bullet" data-glide-dir="=1"></button>
                <button class="glide__bullet" data-glide-dir="=2"></button>
                <button class="glide__bullet" data-glide-dir="=3"></button>
                <button class="glide__bullet" data-glide-dir="=4"></button>
            </div>
        </div>

    );
}

export default Carrusel;