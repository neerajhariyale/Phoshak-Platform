import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFADC] text-[#252525] pt-12 relative">
      {/* Top Gradient Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-red-500 via-yellow-300 to-pink-400 mb-6 "></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold mb-4 text-red-500">Poshak</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Elevating your style with premium collections. Shop trendy, shop
            comfort, shop Poshak.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            {["Home", "About Us", "Shop", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-red-500 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-700">
            {["Men's Collection", "Women's Collection", "Kids", "Accessories"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-red-500 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-700">
            {["FAQs", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-red-500 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
          <p className="text-gray-700 text-sm mb-4">
            Get updates on latest trends, discounts, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Poshak. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ by Poshak Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
