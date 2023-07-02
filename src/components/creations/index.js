import Card from '../card';
import './creations.css';

const Creations = (props) => {
    return(
        <section className='container'>
            <div className='creations-title'>
                <h2>{props.title}</h2>
                <button className='btn'>SEE ALL</button>
            </div>

            <ul className='creations container'>
                {props.cards.map(card =>
                <li>
                    <Card key={card.title} title={card.title} image={card.img}/>
                </li>)}
            </ul>
        </section>
    )
}

export default Creations