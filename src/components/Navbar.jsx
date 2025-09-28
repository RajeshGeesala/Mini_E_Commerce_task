import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/e-commerce-logo.png"; // adjust path based on file location
import { useWishlist } from "../utils/cart";

export default function Navbar() {
  const activeClass = "text-blue-600 font-bold";
  const normalClass = "text-gray-700 hover:text-blue-500";
  const { wishlist } = useWishlist();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-10">
      {/* Logo */}
      <NavLink
        title="Home"
        to="/"
        className={({ isActive }) =>
          `${isActive ? activeClass : normalClass} ml-5 truncate`
        }
      >
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
      </NavLink>

      {/* Right side */}
      <div className="flex gap-4 mr-10">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${isActive ? activeClass : normalClass} truncate`
          }
        >
          <span className="truncate" title="products">Products</span>
        </NavLink>

        <NavLink
          to="/wishlist"
          title="Wish List"
          className={({ isActive }) =>
            `${isActive ? "text-red-600" : normalClass} text-xl truncate flex items-center`
          }
        >
          ♥
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${isActive ? activeClass : normalClass} truncate`
          }
        >
          <span className="truncate" title="cart">Cart</span>
        </NavLink>
      </div>
    </nav>
  );
}
