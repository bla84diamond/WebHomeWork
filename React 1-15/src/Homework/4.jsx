import React, { useState, useEffect } from "react";

function H4() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);

  return (
    <div>
      <h1>Таймер: {formattedTime}</h1>
    </div>
  );
}

export default H4;


