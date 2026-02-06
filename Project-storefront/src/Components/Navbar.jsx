import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaRegHeart, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar({ cartItems }) {
  const navigate = useNavigate();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [searchText, setSearchText] = useState("");

  const products = [
    { name: "Black Hoodie", link: "/hoodies" },
    { name: "Wedding Suit", link: "/suits" },
    { name: "Formal Shirt", link: "/shirts" },
    { name: "Polo T-Shirt", link: "/shirts" },
    { name: "Pants", link: "/Pants" },
    { name: "Blazer", link: "/blazer" },
  ];

  const filtered =
    searchText.trim() === ""
      ? []
      : products.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );

  const handleSelect = (link) => {
    setSearchText("");
    navigate(link);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

      
        <div className="flex h-16 items-center">

          <div className="w-1/3">
            <Link
              to="/"
              className="text-2xl font-bold tracking-widest text-black"
            >
              NOIRLINE
            </Link>
          </div>

          <div className="w-1/3 flex justify-center space-x-10 font-medium">

            <Link to="/" className="text-gray-600 hover:text-black">
              Home
            </Link>

            <Link to="/shop" className="text-gray-600 hover:text-black">
              Shop
            </Link>

            <Link to="/about" className="text-gray-600 hover:text-black">
              About
            </Link>

            <Link to="/contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>

          </div>

         
          <div className="w-1/3 flex items-center justify-end space-x-5 relative">

          
            <div className="relative w-60">

              <div className="flex items-center border rounded-full px-4 py-2">

                <FaSearch className="text-gray-400 mr-2" />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full outline-none text-sm"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />

                {searchText && (
                  <button
                    onClick={() => setSearchText("")}
                    className="text-purple-500 ml-2 font-bold"
                  >
                    ✖
                  </button>
                )}
              </div>

             
              {filtered.length > 0 && (
                <div className="absolute top-12 w-full bg-white border rounded-xl shadow-xl">

                  {filtered.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelect(item.link)}
                      className="w-full py-2 text-sm text-center hover:bg-gray-100"
                    >
                      {item.name}
                    </button>
                  ))}

                </div>
              )}

            </div>

           
            <Link to="/wishlist" className="text-gray-600 hover:text-black">
              <FaRegHeart size={18} />
            </Link>

          
            <Link to="/cart" className="relative text-gray-600 hover:text-black">
              <FaShoppingCart size={18} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            
            <Link to="/login" className="text-gray-600 hover:text-black">
              <CgProfile size={20} />
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
