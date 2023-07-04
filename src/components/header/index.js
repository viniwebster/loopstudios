import './header.css';

const Header = (props) => {
    return(
        <header className='header container'>
            <a href='github.com'>
                <img src='images/logo.svg' alt='logo loopstudios'/>
            </a>
            <nav>
                <ul className='nav-container'>
                <div className='menuMobile'>
                    <img src='images/logo.svg' alt='logo loopstudios'/>
                    <img className='icon-close' src='images/icon-close.svg' alt='logo loopstudios' onClick={props.closeMenu} />
                </div>
                    {props.nav.map( item =><a href='git.com'><li>{item}</li> </a>)}
                </ul>
            </nav>
            <img className='icon-hamburger' src='images/icon-hamburger.svg' alt='Menu mobile' onClick={props.closeMenu}/>
        </header>
    )
}

export default Header