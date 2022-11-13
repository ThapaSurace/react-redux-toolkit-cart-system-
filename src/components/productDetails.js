import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductDetails = () => {
  const productItem = useSelector((state) => state.product.productItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title } = useParams();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="product-detail-page conatiner">
      <Link className="text-decoration-none text-dark" to='/'>
      <div className="back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <span className="ms-1">Back</span>
      </div>
      </Link>
      {productItem
        .filter((item) => item.title === title)
        .map((item) => (
          <div className="product-detail-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-detail">
              <h1>{item.title}</h1>
              <h4>
                <span>Price:</span>${item.price}
              </h4>
              <h4>
                <span>Rating:</span>
                {item.rating.rate}
              </h4>
              <h4>
                <span>Category:</span>
                {item.category}
              </h4>
              <div className="desc">
                <h1>About this item</h1>
                <p>{item.description}</p>
              </div>
              <div className="cart-btn">
                <button onClick={() => addProductToCart(item)} className="btnn">
                  Add To cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductDetails;
