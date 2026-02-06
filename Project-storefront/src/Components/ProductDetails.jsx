import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = ({ onAddToCart }) => {

  const { state } = useLocation();
  const { id } = useParams();

  const [product, setProduct] = useState(state?.product || null);
  const [loading, setLoading] = useState(!state?.product);

  const [activeImage, setActiveImage] = useState("");
  const [size, setSize] = useState("L");
  const [qty, setQty] = useState(1);


  useEffect(() => {
    if (!state?.product) {
      fetch(`http://localhost:9000/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, state]);


  const images = product
    ? [product.image, product.image2]
        .filter(Boolean)
        .map(img =>
          img.startsWith("http")
            ? img
            : `http://localhost:9000${img}`
        )
    : [];

  useEffect(() => {
    if (images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [product]);


  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12">

  
      <div className="flex gap-4">

        {images.length > 1 && (
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-24 object-cover cursor-pointer border
                  ${activeImage === img
                    ? "border-black"
                    : "border-gray-300"}`}
              />
            ))}
          </div>
        )}

        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-[560px] object-cover rounded-lg"
        />
      </div>

    
      <div>

        <p className="text-xs uppercase text-gray-500 mb-2">
          Clothing
        </p>

        <h1 className="text-3xl font-semibold mb-3">
          {product.name}
        </h1>

        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-black">★★★★★</span>
          <span className="text-sm text-gray-500">(134 reviews)</span>
        </div>

        
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-semibold">
            ${product.price}
          </span>

          {product.oldPrice && (
            <span className="line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}
        </div>

       
        <p className="text-gray-600 mb-8 leading-relaxed">
          {product.description ||
            "Premium quality fabric with modern tailoring for everyday comfort."}
        </p>

        
        <div className="mb-6">
          <p className="font-medium mb-2">Size</p>

          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 border rounded
                  ${size === s
                    ? "bg-black text-white"
                    : "border-gray-300"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

  
        <div className="mb-8">
          <p className="font-medium mb-2">Quantity</p>

          <div className="flex items-center w-32 border rounded">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="w-10 h-10"
            >
              -
            </button>

            <span className="flex-1 text-center">
              {qty}
            </span>

            <button
              onClick={() => setQty(qty + 1)}
              className="w-10 h-10"
            >
              +
            </button>
          </div>
        </div>

      
        <button
          onClick={() =>
            onAddToCart?.({ ...product, quantity: qty, size })
          }
          className="w-full bg-black text-white py-3 rounded mb-3"
        >
          ADD TO CART
        </button>

        <button
          className="w-full border border-black py-3 rounded"
        >
          BUY IT NOW
        </button>

        
        <div className="mt-8 text-sm text-gray-500 space-y-1">
          <p>Delivery in 3–6 business days</p>
          <p>Return within 45 days</p>
          <p>SKU: {product.id}</p>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
