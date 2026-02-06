import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Shop = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/products") 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-sm">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* BANNER */}
      <section className="relative w-full h-[55vh]">
        <img
          src="https://i.pinimg.com/1200x/ef/88/db/ef88dbcbeb7f57885c2027b6346e3fe4.jpg"
          alt="Shop Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-serif font-bold mb-2">Shop</h1>
          <p className="text-sm tracking-wide">
            Suits · Wedding Wear · Shirts · Polo T-Shirts · Hoodies · Pants
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
              placeholder="Search products..."
              className="w-full border px-3 py-2 text-sm focus:outline-none"
            />

            <div>
              <h3 className="font-semibold mb-4 text-sm">MEN</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Suits",
                  "Wedding Suits",
                  "Shirts",
                  "Polo T-Shirts",
                  "Hoodies",
                  "Pants",
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer text-gray-600 hover:text-black transition"
                    onClick={() =>
                      navigate(`/shop/${item.toLowerCase().replace(" ", "-")}`)
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">PRICE</h3>
              <input type="range" className="w-full" />
              <p className="text-xs mt-2">₹500 – ₹30,000</p>
            </div>
          </aside>

          {/* PRODUCTS GRID */}
          <div className="md:col-span-4">
            {products.length === 0 ? (
              <p className="text-sm text-gray-500">No products available.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      ...product,
                      image: `http://localhost:8080${product.imageUrl}`,
                    }}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
