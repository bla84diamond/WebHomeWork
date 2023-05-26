import React from "react";
import Product from "./For12Task/Product";
import { useState } from 'react';

function Home12() {

  const product = [
    {
      name: "Товар 989",
      description:
        "Яблоко - это круглый или слегка удлиненный фрукт с гладкой, твердой кожурой, которая может быть различных оттенков зеленого, желтого или красного цвета в зависимости от сорта. Внутри яблока находится сочная мякоть, которая может быть белого, желтого или розового цвета. В центре мякоти располагается семечко, которое также называется косточкой.",
      price: -10,
    },
    {
      name: "Товар 1",
      description:
        "Яблоко - это круглый или слегка удлиненный фрукт с гладкой, твердой кожурой, которая может быть различных оттенков зеленого, желтого или красного цвета в зависимости от сорта. Внутри яблока находится сочная мякоть, которая может быть белого, желтого или розового цвета. В центре мякоти располагается семечко, которое также называется косточкой.",
      price: 10,
    },
    {
      name: "Товар 2",
      description:
        "Яблоко - это круглый или слегка удлиненный фрукт с гладкой, твердой кожурой, которая может быть различных оттенков зеленого, желтого или красного цвета в зависимости от сорта. Внутри яблока находится сочная мякоть, которая может быть белого, желтого или розового цвета. В центре мякоти располагается семечко, которое также называется косточкой.",
      price: 40,
    },
    {
      name: "Товар 3",
      description:
        "Яблоко - это круглый или слегка удлиненный фрукт с гладкой, твердой кожурой, которая может быть различных оттенков зеленого, желтого или красного цвета в зависимости от сорта. Внутри яблока находится сочная мякоть, которая может быть белого, желтого или розового цвета. В центре мякоти располагается семечко, которое также называется косточкой.",
      price: 50,
    },
    {
      name: "Товар 4",
      description:
        "Яблоко - это круглый или слегка удлиненный фрукт с гладкой, твердой кожурой, которая может быть различных оттенков зеленого, желтого или красного цвета в зависимости от сорта. Внутри яблока находится сочная мякоть, которая может быть белого, желтого или розового цвета. В центре мякоти располагается семечко, которое также называется косточкой.",
      price: 3330,
    },
    {
      name: "Товар 5",
      description:
        "Яблоко - это круглый или слегка удлиненный фрукт с гладкой, твердой кожурой, которая может быть различных оттенков зеленого, желтого или красного цвета в зависимости от сорта. Внутри яблока находится сочная мякоть, которая может быть белого, желтого или розового цвета. В центре мякоти располагается семечко, которое также называется косточкой.",
      price: 2,
    },
  ];

  const [products, setProducts] = useState([...product]);

  const sortByPriceAsc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortByPriceDesc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const sortByName = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  };


  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={sortByPriceAsc}>
                Сортировать по возрастанию цены
              </button>
            </li>
            <li>
              <button onClick={sortByPriceDesc}>
                Сортировать по убыванию цены
              </button>
            </li>
            <li>
              <button onClick={sortByName}>
                Сортировать по алфавиту
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default Home12;
