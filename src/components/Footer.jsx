import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-5 mt-5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">DreamGarage</h2>
          <p className="mt-3 text-sm">
            Experience the power, luxury, and adrenaline of the BMW M Series.
            Born for the racetrack, built for the streets. 🏁
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-sky-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-sky-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-sky-400">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@dreamgarage.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Mumbai, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-sky-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DreamGarage. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
