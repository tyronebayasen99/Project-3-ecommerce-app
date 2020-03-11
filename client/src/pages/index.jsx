import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Index() {
  const [products, setProducts] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadProducts();
  }, []);

  function loadProducts() {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
    console.log(products);
  }

  return <h1>Hello World!</h1>;
}

export default Index;
