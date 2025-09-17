import React from 'react'
import "./Advantage.scss"

const Advantage = () => {
  return (
    <>
    <div className="advantage">
        <div className="container">
            <div className="advantage__wrapper">
                <h1>Преимущества</h1>
                <div className="advantage__cards">
                    <div className="advantage__card">
                        <div className="advantage__content">
                            <h2>ИИ Интервьювер 24/7</h2>
                            <p>Автоматизируйте собеседования с помощью голосового ИИ. Система сама проводит интервью, задаёт вопросы и фиксирует ответы кандидата, экономя ваше время и снижая нагрузку на HR-команду. Благодаря анализу речи и интонации вы получаете более точную оценку навыков и soft skills кандидата уже на первом этапе отбора.</p>
                        </div>
                        <img src="./hello.png" alt="" />
                    </div>
                    <div className="advantage__card-flex">
                        <div className="advantage__card1">
                            <img src="./people.png" alt="" />
                            <div className="advantage__content2">
                                <h2>Все кандидаты в Kadrly</h2>
                                <p>Получайте кандидатов напрямую из Handflow и HeadHunter — все заявки собираются в одном окне, без ручного копирования.</p>
                            </div>
                        </div>
                        <div className="advantage__card2">
                            <img src="./cards.png" alt="" />
                            <div className="advantage__content2">
                                <h2>OneID интеграция</h2>
                                <p>HR получает полные данные кандидата напрямую из OneID — никаких лишних анкет и ручной проверки</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Advantage