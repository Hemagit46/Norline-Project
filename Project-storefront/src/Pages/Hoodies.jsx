import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Hoodies = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const [hoodies, setHoodies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoodies = async () => {
      try {
        const res = await fetch("http://localhost:9000/api/hoodies");
        const data = await res.json();

        // Fix image URL
        const hoodiesWithImages = data.map((hoodie) => ({
          ...hoodie,
          imageUrl: hoodie.imageUrl.startsWith("http")
            ? hoodie.imageUrl
            : `http://localhost:9000${hoodie.imageUrl}`,
        }));

        setHoodies(hoodiesWithImages);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hoodies:", err);
        setLoading(false);
      }
    };

    fetchHoodies();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-sm">
        Loading hoodies...
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* BANNER */}
      <section className="relative w-full h-[50vh]">
        <img
          src="https://i.pinimg.com/1200x/54/c5/0a/54c50ae548644897f2f1e2e7f2aaa651.jpg"
          alt="Hoodies Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-serif font-bold mb-2">Hoodies</h1>
          <p className="text-sm tracking-wide">
            Winter · Casual · Street Wear · Stylish
          </p>
        </div>
      </section>

     
      <section className="py-14">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">

         
          <aside className="md:col-span-1 space-y-8">

            <input
              type="text"
              placeholder="Search hoodies..."
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
                  className="cursor-pointer text-gray-600 hover:text-black"
                  onClick={() => navigate("/shop/polo-tshirts")}
                >
                  Polo T-Shirts
                </li>

                <li className="cursor-pointer text-black font-medium">
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


          </aside>

         
          <div className="md:col-span-4">

            {hoodies.length === 0 ? (

              <p className="text-sm text-gray-500">
                No hoodies available.
              </p>

            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {hoodies.map((hoodie) => (

                  <ProductCard
                    key={hoodie.id}
                    product={{
                      ...hoodie,
                      image: hoodie.imageUrl,
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

export default Hoodies;
