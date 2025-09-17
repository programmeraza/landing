import React from 'react'
import "./Price.scss"

const Price = () => {
  return (
    <>
    <div className="price">
        <div className="container">
            <div className="price__wrapper">
                <h1>Тарифы</h1>
                <img src="./plan.png" alt="" />
                <button className="price__btn">Попробовать бесплатно</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Price