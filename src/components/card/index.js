import './card.css';

const Card = (props) => {
    return(
        <div className='card' style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover'
        }}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Card