import Card from '../card';
import './creations.css';

const Creations = (props) => {
    return(
        <section className='container'>
            <div className='creations-title'>
                <h2>{props.title}</h2>
                <button className='btn' onClick={props.mostraTodos}>SEE ALL</button>
            </div>

            <ul className='creations container'>
                {props.cards.map(card =>
                <li>
                    <Card title={card.title} image={card.img}/>
                </li>)}
            </ul>
        </section>
    )
}

export default Creations