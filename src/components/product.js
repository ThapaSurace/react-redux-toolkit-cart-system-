import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../features/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(items);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setItems(await response.clone().json());
      setCategory(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const filteredProduct = (cat) => {
    const filtered = items.filter((item) => item.category === cat);
    setCategory(filtered);
    console.log(filtered);
  };

  const insertProduct = product => dispatch(addProduct(product));
  

  return (
    <div className="container product-container">
      
      <div className="search">
      <input
        className=""
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
     
      <div className="category-list-btn">
        <button className="btnn cat-btn" onClick={() => setCategory(items)}>
          All
        </button>
        <button
          className="btnn cat-btn"
          onClick={() => filteredProduct("men's clothing")}
        >
          Men's clothing
        </button>
        <button
          className="btnn cat-btn"
          onClick={() => filteredProduct("electronics")}
        >
          Electronics
        </button>
        <button
          className="btnn cat-btn"
          onClick={() => filteredProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btnn cat-btn"
          onClick={() => filteredProduct("women's clothing")}
        >
          Women's clothing
        </button>
      </div>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="product-lists">
          {category
            .filter((item) => item.title.toLowerCase().includes(query))
            .map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <p className="my-2">{item.title}</p>
                <span className="mb-2">${item.price}</span>
                <Link to={`/${item.title}`}>
                  <button
                    onClick={() => insertProduct(item)}
                    className="btnn cart-btn"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Product;
