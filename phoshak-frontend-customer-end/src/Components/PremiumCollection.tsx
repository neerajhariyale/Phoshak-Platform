import React from "react";

const PremiumCollection: React.FC = () => {
 const premiumItems = [
  {
    id: 1,
    name: "Luxury Silk Saree",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1725192759667-4942abadebbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Designer Sherwani",
    price: "₹7,499",
    image:
      "https://images.unsplash.com/photo-1610047402714-307d99a677db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Elegant Gown",
    price: "₹6,299",
    image:
      "https://images.unsplash.com/photo-1756483511246-12ae36997a1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEVsZWdhbnQlMjBHb3dufGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Classic Kurta Set",
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1623609163904-127e45d7f01f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


  return (
    <section className="w-full bg-[#FFBF78] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Collection
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Discover our exclusive premium wear designed with elegance and
            comfort.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div
          className="
            flex gap-6 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4
          "
        >
          {premiumItems.map((item) => (
            <div
              key={item.id}
              className="
                flex-shrink-0 w-[220px] sm:w-full bg-gray-100 rounded-2xl 
                 duration-300 overflow-hidden hover:bg-gray-200
              "
            >
              {/* Image */}
              <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
                  {item.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  {item.price}
                </p>
                <button className="mt-4 px-5 py-2 bg-black text-white text-sm md:text-base rounded-full hover:bg-gray-800 transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumCollection;
