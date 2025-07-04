import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/data/global.js";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuRendered, setIsMenuRendered] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      // Closing animation
      setIsMenuRendered(false);
      setTimeout(() => {
        setIsMenuMounted(false);
        document.body.style.overflow = "";
      }, 300);
    } else {
      // Opening animation
      setIsMenuMounted(true);
      setTimeout(() => {
        setIsMenuRendered(true);
        document.body.style.overflow = "hidden";
      }, 20);
    }
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${
          isMenuRendered && "bg-bg"
        } p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none font-normal text-lg">
          <Link href="/">
          <span className="font-black text-[17px] flex items-center">
            <img
              className="mr-2 h-[35px] w-[35px] transform"
              src="/static/logos/logo_no_text.png"
              
            />
            
                <span className="hover:text-fun-pink transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  Muneeb.M
                </span>
    
          </span>
        </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col absolute bg-bg ${
            isMenuRendered && "menuRendered"
          }`}
        >
          {routes.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: `${150 + index * 25}ms` }}
            >
              <Link href={item.path}>
                <a className="flex w-auto pb-4">{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// Menu Icon Component
function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Cross Icon Component
function CrossIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}