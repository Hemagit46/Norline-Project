import React from "react";

const About = () => {
  return (
    <div className="bg-white text-black">

     
      <section className="relative h-[60vh] w-full">
        <img
          src="https://i.pinimg.com/1200x/3f/01/ee/3f01ee8662b65dfe7ca8a1a785a179ab.jpg"
          alt="Norline About"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-serif font-bold">
            About Norline
          </h1>
        </div>
      </section>

      
      <section className="max-w-[75%] mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          
        <div>
            <h2 className="text-3xl font-serif mb-6">
                Redefining Modern Menswear
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Norline is a modern menswear brand built on the philosophy of simplicity,
                precision, and timeless design. We believe that true style is effortless —
                created through clean silhouettes, premium fabrics, and thoughtful
                craftsmanship.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Our collections span tailored suits, refined shirts, premium hoodies, and
                everyday essentials — designed for men who value understated luxury and
                long-lasting quality. Each piece is developed with a focus on structure,
                fit, and functionality.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                At Norline, we carefully select materials that offer comfort, durability,
                and a refined finish. From fabric sourcing to final stitching, every step
                of the process is guided by attention to detail and quality standards.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Our design approach prioritizes versatility — garments that transition
                seamlessly from formal settings to relaxed, everyday wear. This balance
                allows Norline pieces to remain relevant across seasons and occasions.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
                Norline represents confidence through simplicity. We design for individuals
                who appreciate clarity in design, consistency in quality, and clothing that
                complements a modern lifestyle without unnecessary excess.
            </p>
         </div>


      
          <div>
            <img
              src="https://i.pinimg.com/1200x/55/bf/98/55bf98ae21b815696ab2e5ec8d4ac2f5.jpg"
              alt="Norline Style"
              className="w-full h-[650px] object-cover rounded-sm"
            />
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[80%] mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-10 text-sm">
            <div>
              <h3 className="font-medium mb-3">Minimal Design</h3>
              <p className="text-gray-600">
                Clean lines, neutral tones, and timeless aesthetics that never
                go out of style.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected fabrics and refined craftsmanship in every
                garment.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Modern Lifestyle</h3>
              <p className="text-gray-600">
                Designed for versatility — from workdays to weekends.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
