import React from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const openDetails = () => {
    navigate(`/product/${product.id}`, {
      state: { product },
    });
  };

  return (
    <div className="group relative bg-white">

        <img
        src={product.image}
        alt={product.name}
        className="w-full h-[380px] object-cover"
      />


      <div className="absolute inset-0 bg-black/40 opacity-0 
        group-hover:opacity-100 transition flex items-center justify-center gap-4">

        <button
          onClick={openDetails}
          className="p-3 bg-white rounded-full hover:bg-black hover:text-white"
        >
          <FiEye size={18} />
        </button>

        <button
          className="p-3 bg-white rounded-full hover:bg-black hover:text-white"
        >
          <FiHeart size={18} />
        </button>

        <button
          onClick={() => onAddToCart(product)}
          className="p-3 bg-white rounded-full hover:bg-black hover:text-white"
        >
          <FiShoppingCart size={18} />
        </button>

      </div>

      <div className="pt-4 text-center">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.category}</p>
        <p className="mt-1 font-semibold">₹{product.price}</p>
      </div>

    </div>
  );
};

export default ProductCard;
