import './infos.css';

const Infos = (props) => {
    return(
    <section className='infos'>
        <div className='infos-container container'>
            <img src='images/desktop/image-interactive.jpg' alt='Homem usando um vr'/>
            <div className='infos-text'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    </section>
    )
}

export default Infos