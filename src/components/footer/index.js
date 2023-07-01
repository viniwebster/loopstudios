import './footer.css';

const Footer = (props) => {
    return (
        <footer style={{backgroundColor: '#000', padding: "3rem 0"}}>
            <section className='container footer'>
                <nav>
                    <img src={props.logo} alt='Logo loopstudios'/>
                    <ul>
                        {props.navItens.map(item => <li key={item}><a href='git.com'>{item}</a></li> )}
                    </ul>
                </nav>

                <div>
                    <ul className='socials'>
                        <li> <a href='facebook.com'> <img src='images/icon-facebook.svg' alt='logo facebook'/> </a> </li>
                        <li> <a href='twitter.com'> <img src='images/icon-twitter.svg' alt='logo twitter' /> </a> </li>
                        <li> <a href='pinterest.com'> <img src='images/icon-pinterest.svg' alt='logo pinterest'/> </a> </li>
                        <li> <a href='instagram.com'> <img src='images/icon-instagram.svg' alt='logo instagram'/> </a> </li>
                    </ul>
                    <p style={{color: 'hsl(0, 0%, 41%)', marginTop: '2rem'}}>2023 Loopstudios. All rights reserved</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer