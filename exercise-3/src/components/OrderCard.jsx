import React from "react";

export default function OrderCard({ product, price, quantity, onIncrease, onDecrease }) {
  const isZero = quantity === 0;

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{"$ " + price}</small>
      </div>

      <div className="order-quantity">
        <div
          className={"order-button" + (isZero ? " disabled" : "")}
          onClick={!isZero ? onDecrease : undefined}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={onIncrease}>
          +
        </div>
      </div>
    </div>
  );
}