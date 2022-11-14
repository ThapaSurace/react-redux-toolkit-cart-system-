import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCartItem,
  deleteCartItem,
} from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseItemQuantity = (item) => dispatch(addToCart(item));
  const deleteItem = (item) => dispatch(deleteCartItem(item));
  const decreaseItem = (item) => dispatch(decreaseCartItem(item));
  const clearItems = () => dispatch(clearCart());

  return (
    <div className="container cart-section">
      <h1 className="cart-head">Shooping Cart</h1>
      <div className="cart-container">
        {cartItems.items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link className="text-decoration-none text-dark" to="/">
              <div className="continue-shoping">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
                <span>Continue Shoping</span>
              </div>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart">
              <div className="product-titles">
                <h1>Product Details</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>total</h1>
                <h1>Delete</h1>
              </div>
              {cartItems.items.map((item) => (
                <div className="cart-card" key={item.id}>
                  <div className="cart-item">
                    <div className="cart-item-details">
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-item-price">
                      <p>${item.price}</p>
                    </div>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() => increaseItemQuantity(item)}
                        className="increase-btn me-md-2"
                      >
                        +
                      </button>
                    <span> {item.quantity}</span>
                      <button
                        onClick={() => decreaseItem(item)}
                        className="decrease-btn  ms-md-2"
                      >
                        -
                      </button>
                    </div>
                    <div className="cart-item-total">
                      <span>${item.price * item.quantity}</span>
                    </div>
                    <div className="delete-item-btn">
                      <button onClick={() => deleteItem(item)} className="btnn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-more-details">
              <div className="check-out-clear-btn">
                <div className="clear-cart-btn">
                  <button onClick={() => clearItems()} className="btnn">
                    Clear Cart
                  </button>
                </div>
                <div className="check-out-btn">
                  <p><span className="me-2">SubTotal:</span>${cartItems.totalitemPrice.toFixed(2)}</p>
                  <button className="btnn bg-success mb-3">Check Out</button>
                  <Link className="text-decoration-none text-dark" to="/">
                    <div className="continue-shoping">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                      <span>Continue Shoping</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
