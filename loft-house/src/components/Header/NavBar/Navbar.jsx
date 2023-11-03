const Navbar = () => {
    return (
        <div className="header__nav">
            <nav className="nav">
                <ul className="nav__list">
                    <li>
                        <a href="#!">О комплексе</a>
                    </li>
                    <li>
                        <a href="#!">Район</a>
                    </li>
                    <li>
                        <a href="#!">Каталог квартир</a>
                    </li>
                    <li>
                        <a href="#!">Ипотека</a>
                    </li>
                    <li>
                        <a href="#!">Контакты</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export { Navbar };