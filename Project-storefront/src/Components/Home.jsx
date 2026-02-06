import React, { useState, useEffect } from "react";

function Home() {

   const images = [
    "https://i.pinimg.com/736x/20/cd/3a/20cd3af90f01a8ef4d195f9cbe95d03a.jpg",
    "https://i.pinimg.com/736x/f9/be/64/f9be64cc631b4194a79872a0007e980b.jpg",
    "https://i.pinimg.com/1200x/b1/2f/b0/b12fb0bedca5678692160c18d9ccdd03.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  };


   const [email, setEmail] = useState("");
   const [showSubscribePopup, setShowSubscribePopup] = useState(false);
   const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email) return;

  setMessage("Thank you for subscribing! ❤️");
  setShowSubscribePopup(true);

  setTimeout(() => {
    setMessage(
      "Congratulations 🎉 You are now part of our NOIRLINE community. Stay tuned for new updates!"
    );
  }, 2000);

  setTimeout(() => {
    setShowSubscribePopup(false);
    setEmail("");
  }, 5000);
};



  const [reviewText, setReviewText] = useState("");
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  


  const reviews = [
    {
      text: `"NOIRLINE's suits are a perfect blend of tradition and modern
      style. The handloom fabrics are incredibly comfortable and
      breathable."`,
      img: "https://i.pinimg.com/736x/db/c5/82/dbc582cb4a5ef9df9fc7e82e283947b2.jpg",
      name: "- Arjun S."
    },
    {
      text: `"I wore a NOIRLINE embroidered suit for my wedding, and I
      received countless compliments. The craftsmanship and detailing
      are exceptional."`,
      img: "https://i.pinimg.com/1200x/7e/a0/38/7ea038488e43e5fec504d17fedc52723.jpg",
      name: "- Rohan M."
    },
    {
      text: `"The casual wear collection from NOIRLINE is my go-to for
      everyday style. The t-shirts are minimal yet stylish, perfect
      for any occasion."`,
      img: "https://i.pinimg.com/736x/6c/d9/4f/6cd94fa3f6b2b7959c48309c5be7ea3e.jpg",
      name: "- Karan V."
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


 const handleReviewSubmit = (e) => {
  e.preventDefault();

  if (!reviewText) return;

  setShowReviewPopup(true);
  setReviewText("");

  setTimeout(() => {
    setShowReviewPopup(false);
  }, 3000);
};



  return (
    <div>

       <div className="relative w-full h-screen overflow-hidden">

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="w-full h-full bg-black/60 flex items-center justify-center">

                <div className="text-center text-white max-w-3xl px-6">

                  <h1 className="text-5xl font-serif font-bold mb-6">
                    Welcome to NOIRLINE
                  </h1>

                 <p className="text-lg text-gray-200 mb-8">
                    Discover our exclusive collections of fashion and accessories.
                    Elevate your style with NOIRLINE's curated selection of timeless pieces.
                </p>


                  <div className="flex justify-center gap-6">

                    <a
                      href="/shop"
                      className="bg-white text-black py-3 px-8 rounded-md font-semibold"
                    >
                      Shop Now
                    </a>

                    <a
                      href="/about"
                      className="bg-white text-black py-3 px-8 rounded-md font-semibold"
                    >
                      About Us
                    </a>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2
                     bg-black/60 text-white px-4 py-2 rounded-full
                     hover:bg-black transition"
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2
                     bg-black/60 text-white px-4 py-2 rounded-full
                     hover:bg-black transition"
        >
          ❯
        </button>

      </div>


     <section class="py-20 bg-white mt-32">
  <div class="max-w-7xl mx-auto px-6">

    <h1 class="text-4xl font-serif font-bold text-center mb-4 text-black">
      What NOIRLINE Offers
    </h1>

    <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      NOIRLINE is a premium menswear brand blending handloom textures,
      refined tailoring, and modern elegance crafted for everyday wear
      and grand celebrations alike.
    </p>

    <div class="grid md:grid-cols-3 gap-8 mb-10">

      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border">
        <h3 class="text-xl font-semibold mb-3">Handloom Textures</h3>
        <p class="text-gray-600 text-sm">
          Our collections feature rich handloom fabrics that reflect
          tradition, craftsmanship, and comfort designed for a premium,
          breathable feel.
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border">
        <h3 class="text-xl font-semibold mb-3">Suits & Formal Wear</h3>
        <p class="text-gray-600 text-sm">
          Tailored suits and formal outfits crafted with precision,
          offering a sharp silhouette suitable for business, events,
          and special occasions.
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border">
        <h3 class="text-xl font-semibold mb-3">Shirts & Pants</h3>
        <p class="text-gray-600 text-sm">
          Premium shirts and trousers designed for daily elegance,
          combining modern cuts with high-quality fabrics for lasting comfort.
        </p>
      </div>

    </div>

   
    <div class="grid md:grid-cols-3 gap-8">

      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border">
        <h3 class="text-xl font-semibold mb-3">T-Shirts & Casual Wear</h3>
        <p class="text-gray-600 text-sm">
          Minimal, stylish t-shirts and casual outfits that reflect
          NOIRLINE’s modern aesthetic while ensuring comfort and versatility.
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border">
        <h3 class="text-xl font-semibold mb-3">Wedding & Embroidered Suits</h3>
        <p class="text-gray-600 text-sm">
          Luxurious embroidered suits crafted for weddings and celebrations,
          featuring intricate detailing, rich fabrics, and timeless elegance.
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border">
        <h3 class="text-xl font-semibold mb-3">Timeless Craftsmanship</h3>
        <p class="text-gray-600 text-sm">
          Every NOIRLINE piece is designed with attention to detail,
          blending traditional techniques with contemporary fashion sensibility.
        </p>
      </div>
    </div>
  </div>
</section>
<section class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-6">

   
    <div class="text-center mb-16">
      <h1 class="text-5xl font-serif font-bold mb-4">Our Collections</h1>
      <p class="text-gray-500 tracking-wide">
        Handloom textures · Modern tailoring · Wedding craftsmanship
      </p>
    </div>

   
    <div class="grid md:grid-cols-3 gap-10">
      <div class="group relative overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/ad/60/0e/ad600e6b7fa2a0ec8790320a29913558.jpg"
          alt="Suits"
          class="w-full h-[520px] object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 p-6
                    bg-gradient-to-t from-black/60 to-transparent">
          <p class="text-white text-sm tracking-widest uppercase opacity-80">
            NOIRLINE COLLECTION
          </p>
        </div>
        <div class="absolute inset-0 bg-black/70 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 class="text-white text-4xl font-serif tracking-wide">
            Suits
          </h2>
        </div>
      </div>

     
      <div class="group relative overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/94/85/66/948566aec47cea65286552f278ea11d1.jpg"
          alt="Marriage Suits"
          class="w-full h-[520px] object-cover"
        />

        <div class="absolute bottom-0 left-0 right-0 p-6
                    bg-gradient-to-t from-black/60 to-transparent">
          <p class="text-white text-sm tracking-widest uppercase opacity-80">
            SIGNATURE WEDDING
          </p>
        </div>

        <div class="absolute inset-0 bg-black/70 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 class="text-white text-4xl font-serif tracking-wide">
            Marriage Suits
          </h2>
        </div>
      </div>

    
      <div class="group relative overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/c8/20/b5/c820b5e4b9fd0b73cc74016161781888.jpg"
          alt="Shirts"
          class="w-full h-[520px] object-cover"
        />

        <div class="absolute bottom-0 left-0 right-0 p-6
                    bg-gradient-to-t from-black/60 to-transparent">
          <p class="text-white text-sm tracking-widest uppercase opacity-80">
            DAILY ELEGANCE
          </p>
        </div>

        <div class="absolute inset-0 bg-black/70 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 class="text-white text-4xl font-serif tracking-wide">
            Shirts
          </h2>
        </div>
      </div>

     
      <div class="group relative overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/e0/54/1b/e0541be7540338544d7ba540d4498a00.jpg"
          alt="T-Shirts"
          class="w-full h-[520px] object-cover"
        />

        <div class="absolute bottom-0 left-0 right-0 p-6
                    bg-gradient-to-t from-black/60 to-transparent">
          <p class="text-white text-sm tracking-widest uppercase opacity-80">
            MODERN CASUAL
          </p>
        </div>

        <div class="absolute inset-0 bg-black/70 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 class="text-white text-4xl font-serif tracking-wide">
            Polo T-Shirts
          </h2>
        </div>
      </div>

     
      <div class="group relative overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/b5/19/7b/b5197b80372d1a71d1612bd010bdda43.jpg"
          alt="Pants"
          class="w-full h-[520px] object-cover"
        />

        <div class="absolute bottom-0 left-0 right-0 p-6
                    bg-gradient-to-t from-black/60 to-transparent">
          <p class="text-white text-sm tracking-widest uppercase opacity-80">
            TAILORED FIT
          </p>
        </div>

        <div class="absolute inset-0 bg-black/70 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 class="text-white text-4xl font-serif tracking-wide">
            Pants
          </h2>
        </div>
      </div>

     
      <div class="group relative overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/63/a5/f7/63a5f747378dba22fc667bddf8b67874.jpg"
          alt="Hoodies"
          class="w-full h-[520px] object-cover"
        />

        <div class="absolute bottom-0 left-0 right-0 p-6
                    bg-gradient-to-t from-black/60 to-transparent">
          <p class="text-white text-sm tracking-widest uppercase opacity-80">
            URBAN COMFORT
          </p>
        </div>

        <div class="absolute inset-0 bg-black/70 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 class="text-white text-4xl font-serif tracking-wide">
            Hoodies
          </h2>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="py-20 bg-white-100">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h1 class="text-4xl font-serif font-bold mb-4 text-black">
      Why Choose NOIRLINE?
    </h1>
    <p class="text-gray-600 mb-10 max-w-3xl mx-auto">
      At NOIRLINE, we blend tradition with modernity to create menswear
      that stands out. Our commitment to quality, craftsmanship, and    
      timeless style ensures that every piece you wear is more than just
      clothing,it's an experience.
    </p>
    <a href="/shop"
      class="bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-800 transition">
      Explore Our Collections
    </a>
  </div>
</section>

<section class="py-20 bg-white-50">
  <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-serif font-bold text-center mb-8 text-black">
            Reviews
          </h1>

         
          <div className="grid md:grid-cols-3 gap-8">
           
            <div className="bg-white p-6 rounded-xl shadow-md border text-center">
              <p className="text-gray-600 mb-4">
                "NOIRLINE's suits are a perfect blend of tradition and modern
                style. The handloom fabrics are incredibly comfortable and
                breathable."
              </p>

              <img
                src="https://i.pinimg.com/736x/db/c5/82/dbc582cb4a5ef9df9fc7e82e283947b2.jpg"
                alt="Reviewer"
                className="w-12 h-12 rounded-full mb-2 mx-auto"
              />

              <h3 className="text-lg font-semibold">- Arjun S.</h3>
            </div>

            
            <div className="bg-white p-6 rounded-xl shadow-md border text-center">
              <p className="text-gray-600 mb-4">
                "I wore a NOIRLINE embroidered suit for my wedding, and I
                received countless compliments. The craftsmanship and detailing
                are exceptional."
              </p>

              <img
                src="https://i.pinimg.com/1200x/7e/a0/38/7ea038488e43e5fec504d17fedc52723.jpg"
                alt="Reviewer"
                className="w-12 h-12 rounded-full mb-2 mx-auto"
              />

              <h3 className="text-lg font-semibold">- Rohan M.</h3>
            </div>

          
            <div className="bg-white p-6 rounded-xl shadow-md border text-center">
              <p className="text-gray-600 mb-4">
                "The casual wear collection from NOIRLINE is my go-to for
                everyday style. The t-shirts are minimal yet stylish, perfect
                for any occasion."
              </p>

              <img
                src="https://i.pinimg.com/736x/6c/d9/4f/6cd94fa3f6b2b7959c48309c5be7ea3e.jpg"
                alt="Reviewer"
                className="w-12 h-12 rounded-full mb-2 mx-auto"
              />

              <h3 className="text-lg font-semibold">- Karan V.</h3>
            </div>

          </div>

       
          <div className="mt-12 max-w-xl mx-auto text-center">

            <h2 className="text-2xl font-semibold mb-4">
              Write Your Review
            </h2>

            <form onSubmit={handleReviewSubmit}>

              <textarea
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Write your experience..."
                rows="4"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Submit Review
              </button>

            </form>

          </div>

        </div>
      </section>

      {showReviewPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white px-8 py-6 rounded-xl shadow-xl text-center max-w-md">

            <h2 className="text-xl font-semibold mb-2 text-black">
              Thank You ❤️
            </h2>

            <p className="text-gray-600">
              Thank you for your review! Your feedback helps us improve.
            </p>

          </div>

        </div>
      )}

 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-serif font-bold mb-4 text-black">
            Join the NOIRLINE Community
          </h1>

          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Stay updated with the latest trends, exclusive offers, and style
            tips by subscribing to our newsletter. Be a part of the NOIRLINE
            family and elevate your fashion game.
          </p>

          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-gray-300 py-2">

              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                className="flex-shrink-0 bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition cursor-pointer"
                type="submit"
              >
                Subscribe
              </button>

            </div>
          </form>
        </div>
      </section>

      {showSubscribePopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white px-8 py-6 rounded-xl shadow-xl text-center max-w-md">

      <h2 className="text-xl font-semibold mb-2 text-black">
        {message}
      </h2>

    </div>

  </div>
)}


<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-6">

    <div class="grid md:grid-cols-2 gap-8 mb-14">
      <img
        src="https://i.pinimg.com/736x/3f/9f/07/3f9f07b28903aa9dc5b186e8f8c9abda.jpg"
        alt="Newsletter"
        class="w-full h-[520px] object-cover"
      />

      <img
        src="https://i.pinimg.com/736x/90/d7/52/90d75220c05f515a104b190156fbddca.jpg"
        alt="Packaging"
        class="w-full h-[520px] object-cover"
      />
    </div>

   
    <div class="text-center">
      <h1 class="text-4xl font-serif font-bold mb-4 text-black">
        Packing & Delivery
      </h1>
      <p class="text-gray-600 max-w-3xl mx-auto">
        Experience premium packaging that reflects the elegance of NOIRLINE.
        Our delivery service ensures your order arrives promptly and in perfect
        condition, ready to elevate your wardrobe.
      </p>
    </div>

  </div>
</section>

</div>
  
  );
}

export default Home;
