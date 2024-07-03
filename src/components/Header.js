import logo from '../img/Black Gold Minimalist Elegant Initials Logo.png';
import { Link } from 'react-scroll';
import "./Header.css";
const Header = () => {
    return (
        <div className='headerContainer'>
            <img className="logoHeader" src={logo} alt='logoJS'></img>
            <nav>
                <ul>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            <h1>Home</h1>
                        </Link>
                        <Link to="proposito" smooth={true} duration={500} >
                            <h1> Propósito</h1>
                        </Link>
                        <Link to="inspiracao" smooth={true} duration={500}>
                            <h1>Insiparação</h1>
                        </Link>
                        <Link to="pessoas" smooth={true} duration={500}>
                            <h1>Pessoas</h1>
                        </Link>
                        <Link to="experiencia" smooth={true} duration={500}>
                            <h1> Experiência</h1>
                        </Link>
                        <Link to="contato" smooth={true} duration={500}>
                            <h1>Contato</h1>
                        </Link>
                     
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;