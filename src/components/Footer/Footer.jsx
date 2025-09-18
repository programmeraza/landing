import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__content">
                    <ul className="footer__ul">
                        <h3>Связаться с нами</h3>
                        <li>Офис: Ташкент Сити, Проезд 1,</li>
                        <li>Башня 2, Ташкент</li>
                        <button className="footer__btn">Связаться с нами</button>
                    </ul>
                    <ul className="footer__ul">
                        <h3>Продукт</h3>
                        <a href="#">Что такое Kadrly</a>
                        <a href="#">Тарифы</a>
                        <a href="#">Внедрение</a>
                        <a href="#">API</a>
                    </ul>
                    <ul className="footer__ul">
                        <h3>Преимущества</h3>
                        <a href="#">Интерактивные отчёты</a>
                        <a href="#">Для крупных клиентов</a>
                        <a href="#">Для IT-компаний</a>
                        <a href="#">Решение для КА с AmoCRM</a>
                    </ul>
                    <ul className="footer__ul">
                        <h3>Официальные</h3>
                        <a href="#">Пользовательское соглашение</a>
                        <a href="#">Политика конфиденциальности</a>
                        <a href="#">Документы</a>
                        <a href="#">Соблюдение GDPR</a>
                    </ul>
                </div>
                <img src="./kadrly.png" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
