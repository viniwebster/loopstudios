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

    return(
        <section className='banner'>
            <Header nav={navItens}></Header>
            <div className='container title'>
                <h1>{props.text}</h1>
            </div>
        </section>
    )
}

export default Banner