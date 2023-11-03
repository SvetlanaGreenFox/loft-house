import logo from '../../img/logo.svg';

import youtube from './assets/socials/youtube.svg';
import vk from './assets/socials/vk.svg';
import facebook from './assets/socials/facebook.svg';
import instagram from './assets/socials/instagram.svg';

const Footer = () => {
    return (

        <footer class="footer none1">
            <div class="container">
                <h1 class="visually__hidden">Наши контакты</h1>

                <div class="footer__content">
                    <div class="footer__logo">
                        <a href="#!">
                            <img src={ logo } alt="Loft House Logo" class="logo" />
                        </a>
                    </div>

                    <div class="footer__nav">
                        <div class="footer__nav">
                            <nav>
                                <ul class="footer__nav-list">
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
                    </div>

                    <div class="footer__benefits">
                        <div class="footer__nav">
                            <nav>
                                <ul class="footer__nav-list">
                                    <li>
                                        <a href="#!">Поселение и переезд</a>
                                    </li>
                                    <li>
                                        <a href="#!">Сервисные услуги</a>
                                    </li>
                                    <li>
                                        <a href="#!">Экологическая устойчивость</a>
                                    </li>
                                    <li>
                                        <a href="#!">Инвестиционные возможности</a>
                                    </li>
                                    <li>
                                        <a href="#!">Программа лояльности </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="footer__contacts">

                        <dl class="footer__contacts-content">
                            <dt class="contact__key">Адрес:</dt>
                            <dd class="contact__description">Наб. реки Фонтанки 10-15</dd>

                            <dt class="contact__key">Телефон:</dt>
                            <dd class="contact__description"><a href="tel:+78121234567" class="contacts__tel">8 (812) 123-45-67</a></dd>

                            <dt class="contact__key">Отдел продаж:</dt>
                            <dd class="contact__description">10:00 - 20:00</dd>

                            <dt class="contact__key">E-mail:</dt>
                            <dd class="contact__description"><a href="mailto:mailvip@lofthouse.ru" class="contacts__">mailvip@lofthouse.ru</a></dd>
                        </dl>

                        <ul class="socials-list">
                            <li><a href="#!"><img src={ youtube } alt="youtube" class="social" /></a>
                            </li>
                            <li><a href="#!"><img src={ vk } alt="vkontakte" class="social" /></a>
                            </li>
                            <li><a href="#!"><img src={ facebook } alt="facebook" class="social" /></a>
                            </li>
                            <li><a href="#!"><img src={ instagram } alt="instagram" class="social" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };