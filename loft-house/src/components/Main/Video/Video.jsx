import preview from './assets/video.jpg';
import playBtn from './assets/play-button.svg';

const Video = () => {
    return (
        <section className="video">
            <div className="container">
                <h1 className="visually__hidden">Видео наших объектов</h1>

                <a href="https://www.youtube.com/watch?v=bhJNL9JUsnY" data-youtubeLightbox className="video__link">
                    <img src={ preview } className="video__img" alt="preview"/>
                    <img src={ playBtn } className="video__icon" alt="play" />
                </a>
            </div>
        </section>
    );
}

export { Video };