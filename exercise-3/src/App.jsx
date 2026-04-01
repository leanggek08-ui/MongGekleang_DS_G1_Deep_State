import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const INITIAL_ORDERS = [
  { product: "Banana", price: 54.6, quantity: 3 },
  { product: "Computer", price: 100.5, quantity: 4 },
  { product: "Table", price: 1070, quantity: 0 },
];

export default function App() {
  const [orders, setOrders] = React.useState(INITIAL_ORDERS);

  const handleIncrease = (index) => {
    const updated = orders.map((order, i) =>
      i === index ? { ...order, quantity: order.quantity + 1 } : order
    );
    setOrders(updated);
  };

  const handleDecrease = (index) => {
    const updated = orders.map((order, i) =>
      i === index && order.quantity > 0
        ? { ...order, quantity: order.quantity - 1 }
        : order
    );
    setOrders(updated);
  };

  const total = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
          />
        ))}
      </div>

      <CheckoutButton total={total.toFixed(1)} />
    </>
  );
}