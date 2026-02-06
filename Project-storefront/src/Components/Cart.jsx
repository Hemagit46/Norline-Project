import React from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const Cart = ({ cartItems, setCartItems }) => {
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-serif font-bold mb-10">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b pb-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-36 object-cover"
            />

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="mt-1 font-semibold">₹{item.price}</p>

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-2 border rounded"
                >
                  <FiMinus />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-2 border rounded"
                >
                  <FiPlus />
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>

            <p className="font-semibold">
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="flex justify-end mt-10">
        <div className="w-80 border p-6">
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-semibold">₹{totalPrice}</span>
          </div>

          <button className="w-full bg-black text-white py-3 mt-4">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
