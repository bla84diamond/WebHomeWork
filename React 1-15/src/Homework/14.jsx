import { useState } from "react";
import styles from './14.module.css'

function H14() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
    <div className={styles.cointainer}>
      {loggedIn ? <p>Вход выполнен</p> : <p>Выход выполнен</p>}
      <button className={styles.btn} onClick={loggedIn ? handleLogoutClick : handleLoginClick}>
        {loggedIn ? "ВЫЙТИ" : "ВОЙТИ"}
      </button>
    </div>
  );
}

export default H14;
