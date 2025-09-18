import React from "react";
import "./Line.scss";

const Line = () => {
  return (
    <>
      <div className="line">
        <div className="line__container">
          <div className="line__wrapper">
            <div className="line__title">
              <div className="line__block">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 16.25H3C2.31 16.25 1.75 15.6888 1.75 15V11.25C1.75 10.5612 2.31 10 3 10H6.75V7.5C6.75 6.81125 7.31 6.25 8 6.25H11.75V2.5C11.75 1.81125 12.31 1.25 13 1.25H16.75C17.44 1.25 18 1.81125 18 2.5V7.5H16.75V2.5H13V6.25C13 6.93875 12.44 7.5 11.75 7.5H8V10C8 10.6888 7.44 11.25 6.75 11.25H3V15H6.75V16.25ZM19.25 15.625V10C19.25 9.31125 18.69 8.75 18 8.75H14.25C13.56 8.75 13 9.31125 13 10V12.5H9.25C8.56 12.5 8 13.0612 8 13.75V17.5C8 18.1887 8.56 18.75 9.25 18.75H16.125C17.8487 18.75 19.25 17.3475 19.25 15.625Z"
                    fill="#FE5C06"
                  />
                </svg>
                <p>5 шагов к идеальному найму</p>
              </div>
              <h1>Как это работает</h1>
            </div>
            <div className="line__img-overflow">
              <img className="line__img" src="./line.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Line;
