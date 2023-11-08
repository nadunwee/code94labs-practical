import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Recipes
          </span>
        </NavLink>
        <div className="flex md:order-2">
          <a href="/">
            <button
              type="button"
              className="inline-block rounded-lg border border-black px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Refresh Page
            </button>
          </a>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } mditems-center justify-between w-full md:flex md:w-auto md:order-1 `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-black"
                }
                aria-current="page"
                end
              >
                All Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newrecipe"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-black"
                }
              >
                Add New Recipe
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
