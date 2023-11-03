import mouse from './assets/mouse.svg';

const HeaderContent = () => {
    return (
        <div className="container">
            <div className="header__main-content">
                <h1 className="header__title">
                    Жилой комплекс<br/>
                        в историческом центре
                </h1>
                <div className="header__icon">
                    <a href="#benefits">
                        <img src={ mouse } alt="go to benefits" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export { HeaderContent };