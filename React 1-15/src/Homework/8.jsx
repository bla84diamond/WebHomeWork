import React, { useRef } from 'react';

function H8() {
  const inputRef = useRef(null);

  function handleButtonClick() {
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Отправить</button>
    </div>
  );
}

export default H8;
