import React from "react";
import Clock from "./For7Task/Clock";
import Button from "./For7Task/Button";
import List from "./For7Task/List";
import Search from "./For7Task/Search";

function H7() {
  const items = ["Хлеб", "Молоко", "Масло", "Соль"];

  return (
    <div>
      {/* Часы */}
      <Clock />

      {/* Запись ререндинга страницы, работает на все.*/}
      <Button />

      {/* Поиск */}
      <Search
        onSearch={(searchValue) => console.log(`Искали ${searchValue}`)}
      />
      <List items={items} />
    </div>
  );
}

export default H7;
