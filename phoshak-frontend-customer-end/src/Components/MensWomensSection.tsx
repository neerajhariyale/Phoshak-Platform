import React, { useState } from "react";

const MensWomensSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"men" | "women">("men");

  const menProducts = [
    {
      name: "Casual Shirt",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1520975918318-7da2080b86e2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Denim Jeans",
      price: "₹1299",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Leather Jacket",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sneakers",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const womenProducts = [
    {
      name: "Summer Dress",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Stylish Top",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1520962912742-92d6d6a75c7b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Handbag",
      price: "₹1899",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Heels",
      price: "₹1599",
      image:
        "https://images.unsplash.com/photo-1584735174914-6b67f1dca58f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="w-full bg-[#FFFADC] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
            Explore Our Collection
          </h2>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the latest fashion trends for men and women. Shop your
            favorite styles with just one click!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4 sm:space-x-6">
          <button
            onClick={() => setActiveTab("men")}
            className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold shadow-md transition-all duration-300 ${
              activeTab === "men"
                ? "bg-gradient-to-r from-black to-gray-800 text-white scale-105 cursor-pointer"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
            }`}
          >
            Men
          </button>
          <button
            onClick={() => setActiveTab("women")}
            className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold shadow-md transition-all duration-300 ${
              activeTab === "women"
                ? "bg-gradient-to-r from-pink-600 to-pink-400 text-white scale-105 cursor-pointer"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
            }`}
          >
            Women
          </button>
        </div>

        {/* Product Grid (desktop) / Scrollable Row (mobile) */}
        <div
          className="
            flex gap-6 overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-3 md:grid-cols-4
            scrollbar-hide snap-x snap-mandatory
          "
        >
          {(activeTab === "men" ? menProducts : womenProducts).map(
            (product, i) => (
              <div
                key={i}
                className="group min-w-[220px] sm:min-w-0 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 snap-center"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-sm font-medium">
                    {product.price}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-lg mb-2">
                    {product.name}
                  </h3>
                  <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MensWomensSection;
