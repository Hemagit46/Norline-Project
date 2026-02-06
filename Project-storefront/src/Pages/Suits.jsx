import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const suits = [
  {
    id: 1,
    name: "Premium Tailored Suit",
    price: 14500,
    image:
      "https://i.pinimg.com/1200x/62/ed/65/62ed6558ac1dedc9fe9d377625a3f90f.jpg",
    category: "Suits",
  },
  {
    id: 2,
    name: "Italian Black Formal Suit",
    price: 18500,
    image:
      "https://i.pinimg.com/1200x/74/85/a1/7485a1d7b99ff7f1eb0509c212d2588c.jpg",
    category: "Suits",
  },
  {
    id: 3,
    name: "Slim Fit Navy Suit",
    price: 16500,
    image:
      "https://i.pinimg.com/1200x/08/df/db/08dfdb0675dfe221376852054ac5b2ce.jpg",
    category: "Suits",
  },
];

const Suits = ({ onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* BANNER */}
      <section className="relative w-full h-[50vh]">
        <img
          src="https://i.pinimg.com/1200x/ff/3d/8d/ff3d8dd2b93c3173b2d9b1405b203839.jpg"
          alt="Suits Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-serif font-bold mb-2">Men’s Suits</h1>
          <p className="text-sm tracking-wide">
            Luxury · Tailored · Timeless Elegance
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* LEFT SIDEBAR */}
          <aside className="md:col-span-1 space-y-8">
            <input
              type="text"
              placeholder="Search suits..."
              className="w-full border px-3 py-2 text-sm focus:outline-none"
            />

            <div>
              <h3 className="font-semibold mb-4 text-sm">MEN</h3>
              <ul className="space-y-2 text-sm">
                <li
                  className="cursor-pointer text-black font-medium"
                  onClick={() => navigate("/shop/suits")}
                >
                  Suits
                </li>
                <li
                  className="cursor-pointer text-gray-600 hover:text-black"
                  onClick={() => navigate("/shop/wedding-suits")}
                >
                  Wedding Suits
                </li>
                <li
                  className="cursor-pointer text-gray-600 hover:text-black"
                  onClick={() => navigate("/shop/shirts")}
                >
                  Shirts
                </li>
                <li
                  className="cursor-pointer text-gray-600 hover:text-black"
                  onClick={() => navigate("/shop/polo-tshirts")}
                >
                  Polo T-Shirts
                </li>
                <li
                  className="cursor-pointer text-gray-600 hover:text-black"
                  onClick={() => navigate("/shop/hoodies")}
                >
                  Hoodies
                </li>
                <li
                  className="cursor-pointer text-gray-600 hover:text-black"
                  onClick={() => navigate("/shop/pants")}
                >
                  Pants
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">PRICE</h3>
              <input type="range" className="w-full" />
              <p className="text-xs mt-2">₹10,000 – ₹30,000</p>
            </div>
          </aside>

          {/* SUITS GRID */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {suits.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Suits;
