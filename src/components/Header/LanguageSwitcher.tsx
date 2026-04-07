"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    code: "id",
    name: "Indonesia",
    flag: "https://flagcdn.com/w40/id.png",
  },
  {
    code: "cn",
    name: "Chinese",
    flag: "https://flagcdn.com/w40/cn.png",
  },
];

const LanguageSwitcher = ({ sticky }: { sticky: boolean }) => {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((lang) => lang.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative ml-2"
      ref={dropdownRef}
      onMouseEnter={() => {
        if (window.innerWidth >= 992) {
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 992) {
          setIsOpen(false);
        }
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all hover:bg-gray-200/20 ${
          sticky ? "text-dark dark:text-white" : "text-white hover:bg-white/10"
        }`}
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.name}
          className="h-4 w-6 object-cover rounded-sm"
        />
        <span className="uppercase hidden lg:inline">{selectedLang.code}</span>
        <svg
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
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
      </button>

      <div
        className={`absolute right-0 mt-4.5 w-44 overflow-hidden rounded-xl border border-stroke bg-white p-1 shadow-lg transition-all duration-300 dark:border-dark-3 dark:bg-gray-dark z-[100] ${
          isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-2"
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLocale(lang.code as any);
              setIsOpen(false);
            }}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              selectedLang.code === lang.code
                ? "bg-primary/10 text-primary"
                : "text-body-color hover:bg-gray-100 dark:text-white/70 dark:hover:bg-white/5"
            }`}
          >
            <img
              src={lang.flag}
              alt={lang.name}
              className="h-4 w-6 object-cover rounded-sm shadow-sm"
            />
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
