import './header.css';

const Header = (props) => {
    return(
        <header className='header container'>
            <a href='github.com'>
                <img src='images/logo.svg' alt='logo loopstudios'/>
            </a>
            <nav>
                <ul className='nav-container'>
                    {props.nav.map( item =><a href='git.com'><li>{item}</li> </a>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header