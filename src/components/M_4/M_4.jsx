import React from 'react';

export const M_4 = () => {
  return (
    <div className="m4">
      <div className="m4__text">
        Прохождение теста займет у вас не более
        <span style={{color: "#FFC700"}}>
          {" 12 минут"}
        </span>
        , а его результаты вы сможете
        <span style={{color: "#FFC700"}}>
          {" использовать всю жизнь."}
        </span>
      </div>

      <div className="m4__wrapper">
        Профессиональная интерпретация и детально
        <span style={{fontWeight: "bold"}}>
          {" проработанные рекомендации "}
        </span>
        позволят вам качественно
        <span style={{fontWeight: "bold"}}>
          {" изменить все аспекты своей жизни: "}
        </span>
        от финансового до любовного.
      </div>

      <button
        type="button"
        className="m4__button"
      >
        пройти тест
      </button>

      <p className="m4__copyright">
        2019
      </p>
    </div>
  );
};
