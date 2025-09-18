import React from 'react'
import "./Reviews.scss"

const Reviews = () => {
  return (
    <>
      <div className="reviews">
        <div className="container">
            <div className="reviews__wrapper">
                <h1>Отзывы клиентов</h1>
                <div className="reviews__cards">
                    <div className="reviews__card">
                        <div className="reviews__ava-flex">
                            <img src="./ava1.png" alt="" />
                            <img src="./artel-logo.png" alt="" />
                        </div>
                        <img src="./point.png" alt="" />
                        <div className="reviews__content">
                            <p>Система фильтрации резюме экономит время и помогает быстрее находить сильных кандидатов. Теперь мы сосредоточены на работе с талантами, а не на рутине.</p>
                            <div className="reviews__text">
                                <p>Анна Николаевна</p>
                                <span>Глава HR отдела</span>
                            </div>
                        </div>
                    </div>

                    <div className="reviews__card">
                        <div className="reviews__ava-flex">
                            <img src="./ava2.png" alt="" />
                            <img src="./akfa-logo.png" alt="" />
                        </div>
                        <img src="./point.png" alt="" />
                        <div className="reviews__content">
                            <p>Инструмент мгновенно выделяет лучших кандидатов. Я трачу меньше времени на просмотр резюме и больше — на реальные собеседования.</p>
                            <div className="reviews__text">
                                <p>Игорь Петров</p>
                                <span>Менеджер по подбору персонала</span>
                            </div>
                        </div>
                    </div>

                    <div className="reviews__card">
                        <div className="reviews__ava-flex">
                            <img src="./ava3.png" alt="" />
                            <img src="./dream-logo.png" alt="" />
                        </div>
                        <img src="./point.png" alt="" />
                        <div className="reviews__content">
                            <p>Благодаря системе мы быстро нашли сильных специалистов. Это напрямую ускорило рост продаж и развитие команды.</p>
                            <div className="reviews__text">
                                <p>Светлана Васильевна</p>
                                <span>Руководитель отдела продаж</span>
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

export default Reviews
