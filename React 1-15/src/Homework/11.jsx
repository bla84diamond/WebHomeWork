import React from "react";
import "./11.css"

function H11() {
  return (
    <div className="main">
      <h1>Мир котиков</h1>
      <p>Повеселитесь с забавных котиков вместе с нами!</p>

      <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О котиках</a>
          </li>
          <li>
            <a href="#">Галерея</a>
          </li>
          <li>
            <a href="#">Смешные видосики</a>
          </li>
        </ul>
      </nav>

      <h2>Добро пожаловать в мир забавных котиков</h2>
      <p>
        Мы рады представить вам наш сайт, посвященный веселым котикам.
        Здесь вы найдете множество интересных историй про котиков, фотографий с этими пушистыми зверьками, а так же кучу веселых видосиков с этими маленькими пушистиками.
      </p>

      <h3>Новые видосики</h3>
      <ul>
        <li>
          <a href="#">Котик забавно просит покушать</a>
        </li>
        <li>
          <a href="#">
            Пушистый хулиган переворачивает весь дом
          </a>
        </li>
        <li>
          <a href="#">Котятки любят пошалить</a>
        </li>
      </ul>

      <h3>Последние смешные фоточки</h3>
      <ul>
        <li>
          <a href="#">
            Этот чудесный пушистый мир
          </a>
        </li>
        <li>
          <a href="#">
            А вот так вы можете?
          </a>
        </li>
        <li>
          <a href="#">
            Сдавайся я захватил твой мир!
          </a>
        </li>
      </ul>
    </div>
  );
}

export default H11;
