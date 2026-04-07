"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import LanguageSwitcher from "./LanguageSwitcher";
import getMenuData from "./menuData";
import { useTranslation } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useTranslation();
  const menuData = getMenuData(t);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const [textWhite, setTextWhite] = useState(true);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
      setTextWhite(false);
    } else {
      setSticky(false);
      setTextWhite(true);
    }
  };

  const [openIndex, setOpenIndex] = useState(-1);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    handleStickyNavbar();
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center">
            <div className="w-52 max-w-full px-4">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <Image
                  src={
                    textWhite && !sticky
                      ? "/images/logo/logo.svg"
                      : "/images/logo/logo-2.svg"
                  }
                  alt="logo"
                  width={120}
                  height={30}
                  className="w-full"
                />
              </Link>
            </div>

            <div className="flex flex-1 items-center px-4">
              <div className="w-full flex-1 flex justify-center items-center">
                {/* TOGGLER */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  {[0, 1, 2].map((_, i) => (
                    <span
                      key={i}
                      className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                        navbarOpen
                          ? i === 0
                            ? "top-[7px] rotate-45"
                            : i === 1
                            ? "opacity-0"
                            : "top-[-8px] -rotate-45"
                          : ""
                      } ${

                        sticky
                          ? "bg-black dark:bg-white"
                          : "bg-white"
                      }`}
                    />
                  ))}
                </button>

                {/* NAV */}
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul ref={menuRef} className="block lg:flex lg:space-x-6">
                    {menuData.map((menuItem, index) => (
                      <li
                        key={index}
                        className="group relative"
                        onMouseEnter={() => {
                          if (window.innerWidth >= 992) {
                            setOpenIndex(index);
                          }
                        }}
                        onMouseLeave={() => {
                          if (window.innerWidth >= 992) {
                            setOpenIndex(-1);
                          }
                        }}
                      >
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={() => {
                              setOpenIndex(-1);
                              setNavbarOpen(false);
                            }}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              navbarOpen || sticky
                                ? "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                : "text-white hover:text-white/80"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`flex w-full cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:justify-start lg:gap-2 ${
                                navbarOpen || sticky
                                  ? "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                  : "text-white hover:text-white/80"
                              }`}
                            >
                              {menuItem.title}
                              <span className="pl-1">
                                <svg
                                  className={`h-4 w-4 transition-transform ${
                                    openIndex === index ? "rotate-180" : ""
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </span>
                            </button>

                            <div
                              className={`submenu dark:border-dark-3 dark:bg-gray-dark relative left-0 mt-0 overflow-hidden transition-all duration-300 lg:absolute lg:top-[110%] lg:w-[250px] lg:shadow-lg z-[100] lg:rounded-xl lg:border lg:border-stroke lg:bg-white lg:p-1 ${
                                openIndex === index
                                  ? "max-h-[1000px] visible opacity-100 lg:top-full"
                                  : "max-h-0 invisible opacity-0 lg:top-[120%] lg:max-h-none"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, subIndex) => (
                                <Link
                                  href={submenuItem.path}
                                  key={subIndex}
                                  onClick={() => {
                                    setOpenIndex(-1);
                                    setNavbarOpen(false);
                                  }}
                                  className="text-body-color hover:bg-gray-100 dark:text-white/70 dark:hover:bg-white/5 block rounded-lg px-8 py-2 text-sm transition-all hover:text-primary dark:hover:text-white lg:px-4"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* <Link
                  href="/signin"
                  className="truncate text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white"
                >
                  Sign In
                </Link> */}
                {/* <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link> */}
                <div className="flex items-center">
                  {/* <ThemeToggler /> */}
                  <LanguageSwitcher sticky={sticky} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;