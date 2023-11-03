import placeholder from './assets/placeholder.svg';
import phone from './assets/phone-call.svg';

const HeaderFooter = () => {
    return (
        <div className="header__footer">
            <div className="content-right">
                <a href="#section-map">
                    <img className="contacts__icon" src={ placeholder } alt="adress" />
                    <span>Наб. реки Фонтанки 10-15</span>
                </a>
            </div>
            <div className="content-left">
                <a href="tel:+78121234567">
                    <img className="contacts__icon" src={ phone } alt="phone number" />
                    <span>8 (812) 123-45-67</span>
                </a>
            </div>
        </div>
    );
}

export { HeaderFooter };