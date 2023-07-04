import Header from '../header';
import './banner.css';

const Banner = (props) => {

    const navItens = [
        "About",
        "Carrers",
        "Events",
        "Products",
        "Support"
    ]

    function abrirMenuMobile() {
        const menuMobile = document.querySelector('.nav-container');

        if (menuMobile.style.display === "none"){
            menuMobile.style.display = "flex"
        } else {
            menuMobile.style.display = "none"
        }
    }

    return(
        <section className='banner'>
            <Header nav={navItens} closeMenu={abrirMenuMobile}></Header>
            <div className='container title'>
                <h1>{props.text}</h1>
            </div>
        </section>
    )
}

export default Banner