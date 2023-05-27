import React, { useState } from 'react';

function H10() {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Нажмите пожалуйста</button>
      <h1 style={{ color: isClicked ? 'violet' : 'blue' }}>
        Привет, мир!
      </h1>
    </div>
  );
}

export default H10;