import React, { useState } from 'react';

function Home10() {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h1 style={{ color: isClicked ? 'red' : 'black' }}>
        Привет, мир!
      </h1>
    </div>
  );
}

export default Home10;