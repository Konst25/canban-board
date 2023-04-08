import Logo from '../media/canban.png';
import Account from '../media/account.jpg';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <div className='header'>
                <div className='header__logo'>
                    <a href='/' className='header__logo_link'>
                        <img src={Logo} alt='logo' />
                    </a>
                </div>

                <div className='header__register'>
                    <a href='/' className='header__register_link'>
                        <img src={Account} alt='Account' />
                    </a>
                </div>
            </div>
        </header>
    );
}

export { Header };
