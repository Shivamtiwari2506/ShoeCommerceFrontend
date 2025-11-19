import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              123 Shoe Street, Monochrome City, MC 12345
            </p>
            <p className="mt-2 text-gray-600">
              Email:{" "}
              <a
                href="mailto:support@shoeverse.com"
                className="hover:text-gray-900"
              >
                support@shoetrend.com
              </a>
            </p>
            <p className="mt-2 text-gray-600">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-gray-900">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-[0.5px] focus:ring-gray-900 text-black"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <IconBrandFacebook stroke={2} color="#1877F2" />{" "}
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <IconBrandX stroke={2} color="#000000" />{" "}
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <IconBrandInstagram stroke={2} color="#E4405F" />{" "}
            </a>
          </div>
          <p className="mt-4 md:mt-0 text-gray-600">
            &copy; 2025 ArbnStap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
