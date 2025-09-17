import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header__wrapper">
                
                <img src="./logo.png" alt="logo" />

                <ul className="header__ul">
                    <a href="#">Преимущества</a>
                    <a href="#">Как перейти</a>
                    <a href="#">Кейсы</a>
                    <a href="#">Тарифы</a>
                    <a href="#">О нас</a>
                </ul>

                <div className="header__btn-flex">
                    <button className="header__btn-white">Запросить демо</button>
                    <button className="header__btn-black">Войти</button>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Header