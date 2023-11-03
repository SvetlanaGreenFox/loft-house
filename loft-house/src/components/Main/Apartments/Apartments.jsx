import apartmentList from './assets/apartmentList';

const Apartments = () => {

    return (
        <section className="apartments">
            <div className="container">
                <div className="apartments__title">
                    <h2 className="title-secondary">Наши квартиры</h2>
                </div>

                <div className="apartments__gallery">

                    {apartmentList.map(item => {
                        return (
                            <a key={ item.id } href="#!" className="card">
                                <img src={ item.img } alt={ item.name } classNameName="card__img" />
                                <h3 className="card__title">{ item.title }</h3>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export { Apartments };