import Logo from '../media/canban.png';
import Account from '../media/account.jpg';

function Header() {
    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <div className='header_logo'>
                        <a href='/' className='header_logo-link'>
                            <img src={Logo} alt='logo' />
                        </a>
                    </div>

                    <div className='header_register'>
                        <a href='/' className='header_register-link'>
                            <img src={Account} alt='Account' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export { Header };
