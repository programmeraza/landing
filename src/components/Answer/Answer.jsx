import React from 'react'
import "./Answer.scss"
import AccordionFunc from '../Accordion/Accordion'

const Answer = () => {
  return (
    <>
    <div className="answer">
        <div className="cotainer">
            <div className="answer__wrapper">
                <h1>Часто задаваемые вопросы</h1>
                <AccordionFunc/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Answer
