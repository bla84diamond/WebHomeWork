import React, { useState } from "react";

function H6(props) {
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = () => {
    setIsShown(!isShown);
  };
  return (
    <div>
      <button onClick={toggleIsShown}>
        Нажмите чтобы показать имя
      </button>
      {isShown && <p>Имя - {props.name}, Возраст - {props.age}</p>}
    </div>
  );
}

export default H6;
