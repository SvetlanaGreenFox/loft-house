import bench from './assets/bench.svg';
import building from './assets/building.svg';
import fountain from './assets/fountain.svg';
import bicycle from './assets/bicycle.svg';

const Benefits = () => {
    return (
        <section className="benefits">
            <h1 className="visually__hidden">Преимущества жилого комплекса</h1>

            <div className="container container--small">
                <div className="benefits__content">
                    <div className="benefits__item">
                        <img className="benefits__item-img" src={ bench } alt="" />
                        <p className="benefits__item-description">Рядом исторические <br />
                            парки&nbsp;и&nbsp;скверы</p>
                    </div>
                    <div className="benefits__item">
                        <img className="benefits__item-img" src={ building } alt="" />
                        <p className="benefits__item-description">Полностью
                            обустроенный</p>
                    </div>
                    <div className="benefits__item">
                        <img className="benefits__item-img" src={ fountain } alt="" />
                        <p className="benefits__item-description">10 фонтанов
                            на территории</p>
                    </div>
                    <div className="benefits__item">
                        <img className="benefits__item-img" src={ bicycle } alt="" />
                        <p className="benefits__item-description">6 км
                            велодорожек</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Benefits };