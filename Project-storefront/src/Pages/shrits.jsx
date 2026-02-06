import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Shirts = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const res = await fetch("http://localhost:9000/api/shirts");
        const data = await res.json();

        const shirtsWithImages = data.map((shirt) => ({
          ...shirt,
          imageUrl: shirt.imageUrl
            ? shirt.imageUrl.startsWith("http")
              ? shirt.image
              : `http://localhost:9000${shirt.imageUrl}`
            : `http://localhost:9000${shirt.image}`, // fallback
        }));

        setShirts(shirtsWithImages);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shirts:", err);
        setLoading(false);
      }
    };

    fetchShirts();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-sm">
        Loading shirts...
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* Banner */}
      <section className="relative w-full h-[50vh]">
        <img
          src="https://i.pinimg.com/736x/b3/c0/0d/b3c00dea51fd8c3d42d2b97941a98a47.jpg"
          alt="Shirts Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-serif font-bold mb-2">Shirts</h1>
          <p className="text-sm tracking-wide">
            Handloom · Formal · Casual · Party Wear
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-8">
            <input
              type="text"
              placeholder="Search shirts..."
              className="w-full border px-3 py-2 text-sm focus:outline-none"
            />

            <div>
              <h3 className="font-semibold mb-4 text-sm">MEN</h3>
              <ul className="space-y-2 text-sm">
                <li onClick={() => navigate("/shop/suits")} className="cursor-pointer text-gray-600 hover:text-black">Suits</li>
                <li onClick={() => navigate("/shop/wedding-suits")} className="cursor-pointer text-gray-600 hover:text-black">Wedding Suits</li>
                <li className="cursor-pointer text-black font-medium">Shirts</li>
                <li onClick={() => navigate("/shop/polo-tshirts")} className="cursor-pointer text-gray-600 hover:text-black">Polo T-Shirts</li>
                <li onClick={() => navigate("/shop/hoodies")} className="cursor-pointer text-gray-600 hover:text-black">Hoodies</li>
                <li onClick={() => navigate("/shop/pants")} className="cursor-pointer text-gray-600 hover:text-black">Pants</li>
              </ul>
            </div>
          </aside>

          {/* Products */}
          <div className="md:col-span-4">
            {shirts.length === 0 ? (
              <p className="text-sm text-gray-500">No shirts available.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {shirts.map((shirt) => (
                  <ProductCard
                    key={shirt.id}
                    product={{
                      ...shirt,
                      image: shirt.imageUrl,
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

export default Shirts;
