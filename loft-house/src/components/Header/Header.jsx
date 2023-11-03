import Button from "./Button";
import HeaderContent from "./HeaderContent";
import HeaderFooter from "./HeaderFooter";
import Navbar from "./NavBar";
import logo from '../../img/logo.svg';

const Header = () => {
    return (
        <header class="header none1">
            <div class="header__top">
                <div class="container">
                    <div class="header__top-content">
                        <a href="#!">
                            <img src={ logo } alt="Loft House Logo" class="logo" />
                        </a>
                        <Navbar />
                        <Button />
                    </div>
                </div>
            </div>
            <HeaderContent />
            <HeaderFooter />
        </header>
    );
}

export { Header };