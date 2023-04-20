import React from 'react';
import br from './img/br.png';

export const M_3 = () => {
  return (
    <div className="m3">
      <div className="m3__text">
        Также по результатам теста
        <strong style={{textTransform: "uppercase", fontWeight: "bold"}}>
          {" вы получите "}
        </strong>
        подробные
        <strong style={{textTransform: "uppercase", fontWeight: "bold"}}>
          {" советы "}
        </strong>
        по определению наиболее перспективной
        <strong style={{fontWeight: "bold"}}>
          <span style={{textTransform: "uppercase"}}>
            {" для вашего типа "}
          </span>
          интеллекта
          <span style={{textTransform: "uppercase"}}>
            {" сферы деятельности, "}
          </span>
        </strong>
        которая принесет вам скорейший финансовый результат.
      </div>

      <img src={br} alt="brain" className="m3__image"/>

      <button
        type="button"
        className="m3__button"
      >
        пройти тест
      </button>
    </div>
  );
};
