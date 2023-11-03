const Feedback = () => {
    return (
        <section className="feedback">
            <div className="container">
                <div className="feedback__title">
                    <h2 className="title-secondary">Есть вопросы?</h2>
                </div>

                <form action="" className="feedback__form form">
                    <p className="form__privacy form__privacy--bottom form__privacy--center">
                        *Мы никому не передаем ваши данные.<br />
                        И не сохраняем ваш номер в базу.
                    </p>

                    <input className="form__input" type="text" placeholder="Ваше имя" />
                    <input data-tel-input className="form__input" type="text" placeholder="Ваш телефон" />

                    <button className="form__btn" type="submit">Посмотреть район</button>
                </form>
            </div>
        </section>
    );
}

export { Feedback };