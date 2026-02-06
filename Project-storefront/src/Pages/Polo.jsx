import React from 'react'
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const poloTshirts = [
  {
    id: 1,
    name: "Classic Handloom Polo",
    price: 2800,
    image:
      "https://i.pinimg.com/736x/fd/82/58/fd82586784117d783fae4da0453bbf99.jpg",
  },
  {
    id: 2,
    name: "Premium Cotton Polo",
    price: 3200,
    image:
      "https://i.pinimg.com/1200x/5f/11/9c/5f119c1a3ea29c27939c572a4a507af4.jpg",
  },
  {
    id: 3,
    name: "Minimal Black Polo",
    price: 3500,
    image:
      "https://i.pinimg.com/736x/eb/ab/cf/ebabcf3b6063010491b5b2699ff10f40.jpg",
  }
];
const Polo = ({ onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* BANNER */}
      <section className="relative w-full h-[50vh]">
        <img
          src="https://i.pinimg.com/1200x/ca/f5/c0/caf5c04061119c50b9d22b330ef8b9b7.jpg"
          alt="Polo T-Shirts Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-serif font-bold mb-2">
            Polo T-Shirts
          </h1>
          <p className="text-sm tracking-wide">
            Classic · Minimal · Handloom · Premium Cotton
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
              placeholder="Search polo t-shirts..."
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
                  className="cursor-pointer text-black font-medium"
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
              <p className="text-xs mt-2">₹2,000 – ₹5,000</p>
            </div>
          </aside>

          {/* GRID */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {poloTshirts.map((product) => (
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

export default Polo