import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Pants = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [pants, setPants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPants = async () => {
      try {
        const res = await fetch("http://localhost:9000/api/pants");
        const data = await res.json();

        const pantsWithImages = data.map((pant) => ({
          ...pant,
          imageUrl: pant.imageUrl
            ? pant.imageUrl.startsWith("http")
              ? pant.imageUrl
              : `http://localhost:9000${pant.imageUrl}`
            : `http://localhost:9000${pant.image}`, // fallback
        }));

        setPants(pantsWithImages);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching pants:", err);
        setLoading(false);
      }
    };

    fetchPants();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-sm">
        Loading pants...
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* Banner */}
      <section className="relative w-full h-[50vh]">
        <img
          src="https://i.pinimg.com/736x/5a/18/48/5a1848860784e2d18e9506dd65210c9f.jpg"
          alt="Pants Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-serif font-bold mb-2">Pants</h1>
          <p className="text-sm tracking-wide">
            Tailored · Casual · Comfort Fit
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
              placeholder="Search pants..."
              className="w-full border px-3 py-2 text-sm focus:outline-none"
            />

            <div>
              <h3 className="font-semibold mb-4 text-sm">MEN</h3>
              <ul className="space-y-2 text-sm">
                <li onClick={() => navigate("/shop/suits")} className="cursor-pointer text-gray-600 hover:text-black">Suits</li>
                <li onClick={() => navigate("/shop/wedding-suits")} className="cursor-pointer text-gray-600 hover:text-black">Wedding Suits</li>
                <li onClick={() => navigate("/shop/shirts")} className="cursor-pointer text-gray-600 hover:text-black">Shirts</li>
                <li onClick={() => navigate("/shop/polo-tshirts")} className="cursor-pointer text-gray-600 hover:text-black">Polo T-Shirts</li>
                <li onClick={() => navigate("/shop/hoodies")} className="cursor-pointer text-gray-600 hover:text-black">Hoodies</li>
                <li className="cursor-pointer text-black font-medium">Pants</li>
              </ul>
            </div>
          </aside>

          {/* Products */}
          <div className="md:col-span-4">
            {pants.length === 0 ? (
              <p className="text-sm text-gray-500">No pants available.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {pants.map((pant) => (
                  <ProductCard
                    key={pant.id}
                    product={{
                      ...pant,
                      image: pant.imageUrl,
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

export default Pants;
