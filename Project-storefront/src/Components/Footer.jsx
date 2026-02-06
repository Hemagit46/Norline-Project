import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* CONTACT */}
        <div>
          <h3 className="text-white text-lg mb-6">CONTACT US</h3>
          <div className="space-y-4 text-sm">
            <p>📍 Address: Madhapur, Hyderabad, Telangana</p>
            <p>✉ Email: noirlinefashion@gmail.com</p>
            <p>📞 Phone: 9874563210</p>
          </div>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="text-white text-lg mb-6">INFORMATION</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">My Account</li>
            <li className="hover:text-gray-300 cursor-pointer">Order History</li>
            <li className="hover:text-gray-300 cursor-pointer">Wishlist</li>
            <li className="hover:text-gray-300 cursor-pointer">Returns</li>
            <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-300 cursor-pointer">Site Map</li>
          </ul>
        </div>

        {/* INSTAGRAM */}
        <div>
          <h3 className="text-white text-lg mb-6">INSTAGRAM</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="https://i.pinimg.com/1200x/d2/a5/18/d2a5183e6f2d9ed8995039a7de676ae6.jpg" alt="" className="w-full h-20 object-cover" />
            <img src="https://i.pinimg.com/736x/ef/aa/2f/efaa2fe1f5143fa3a9f1ff9589ba6ca1.jpg" alt="" className="w-full h-20 object-cover" />
            <img src="https://i.pinimg.com/736x/99/de/21/99de21f68819f3ecc25826fbd62741fa.jpg" alt="" className="w-full h-20 object-cover" />
            <img src="https://i.pinimg.com/1200x/ce/ae/d8/ceaed8521b76ffdd24c9ab874f3360f9.jpg" alt="" className="w-full h-20 object-cover" />
            <img src="https://i.pinimg.com/736x/84/bf/bc/84bfbc3b2497825621b1f5c9decd8212.jpg" alt="" className="w-full h-20 object-cover" />
            <img src="https://i.pinimg.com/1200x/4b/93/a4/4b93a464723ed77a7fa18dbd5492fa44.jpg" alt="" className="w-full h-20 object-cover" />
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white text-lg mb-4">SOCIAL NETWORK</h3>
          <div className="flex gap-3">
            {["f", "in", "p", "G", "t"].map((icon, i) => (
              <span
                key={i}
                className="w-10 h-10 flex items-center justify-center bg-white text-black cursor-pointer hover:opacity-80"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 text-center mt-10">
        <p className="text-sm">
          © 2025 NOIRLINE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
