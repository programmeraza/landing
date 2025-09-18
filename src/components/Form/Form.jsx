import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.agree
    ) {
      alert("Пожалуйста, заполните все поля и подтвердите согласие!");
      return;
    }

    const token = "8450616269:AAGV-nKFPgP_fPpa0M4lH2BjodJqntmm-5k";
    const chatId = "6451223788";
    const text = `
        ✉️ Новая заявка:
        👤 Имя: ${formData.firstName}
        👤 Фамилия: ${formData.lastName}
        📧 Email: ${formData.email}
        💬 Сообщение: ${formData.message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      });

      alert("Сообщение отправлено!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agree: false,
      });
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Ошибка при отправке сообщения.");
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Имя</label>
              <input
                type="text"
                name="firstName"
                placeholder="Валентина"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Фамилия</label>
              <input
                type="text"
                name="lastName"
                placeholder="Крудко"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="mail@mail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Сообщение</label>
            <textarea
              name="message"
              placeholder="Оставьте сообщение"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>Я согласен с политикой конфиденциальности</span>
          </div>

          <button type="submit" className="btn-submit">
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
