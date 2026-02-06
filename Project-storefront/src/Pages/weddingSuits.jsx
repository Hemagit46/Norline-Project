import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const weddingSuits = [
  {
    id: 1,
    name: "Royal Embroidered Wedding Suit",
    price: 28500,
    image:
      "https://i.pinimg.com/1200x/c9/91/41/c9914149391069c7d3c9e781d12cdd81.jpg",
    category: "Wedding Suits",
  },
  {
    id: 2,
    name: "Luxury white Wedding Suit",
    price: 32000,
    image:
      "https://i.pinimg.com/736x/f5/b1/83/f5b18302c72bd8fe3a7249f1aa12af06.jpg",
    category: "Wedding Suits",
  },
  {
    id: 3,
    name: "Golden Sherwani Style Suit",
    price: 35000,
    image:
      "https://i.pinimg.com/1200x/ad/04/9c/ad049c3eb96dfefe585f296277495aed.jpg",
    category: "Wedding Suits",
  },
];

const WeddingSuits = ({ onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* BANNER */}
      <section className="relative w-full h-[50vh]">
        <img
          src="https://i.pinimg.com/1200x/91/ac/5f/91ac5ffb6184da3bd5150a06e073c820.jpg"
          alt="Wedding Suits Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-serif font-bold mb-2">
            Wedding Suits
          </h1>
          <p className="text-sm tracking-wide">
            Royal · Handcrafted · Celebration Wear
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
              placeholder="Search wedding suits..."
              className="w-full border px-3 py-2 text-sm focus:outline-none"
            />

            <div>
              <h3 className="font-semibold mb-4 text-sm">MEN</h3>
              <ul className="space-y-2 text-sm">
                <li
                  className="cursor-pointer text-gray-600 hover:text-black"
                  onClick={() => navigate("/shop/suits")}
                >
                  Suits
                </li>
                <li
                  className="cursor-pointer text-black font-medium"
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
              <p className="text-xs mt-2">₹20,000 – ₹50,000</p>
            </div>

          </aside>

          {/* WEDDING SUITS GRID */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {weddingSuits.map((product) => (
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

export default WeddingSuits;
