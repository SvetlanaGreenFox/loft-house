const Map = () => {
    return (
        <section className="section-map">
            <div className="container">
                <div className="map__title">
                    <h2 className="title-secondary">Район на карте</h2>
                </div>

                <div className="section-map__map">
                    <div className="map" id="map"></div>
                </div>
            </div>
        </section>
    );
}

export { Map };