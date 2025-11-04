"use client";
import { useState } from "react";

import Link from "next/link";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center space-x-3">
      {/* MAŁE EKRANY */}
      <div className="flex items-center space-x-3 sm:hidden">
        {/* Cennik (C) */}
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition-colors"
        >
          <span className="text-3xl text-black ">C</span>
        </Link>

        {/* Ikona użytkownika */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition-colors"
          >
            <img
              alt="name"
              src="/default_user.png"
              className="w-full max-w-[144px] h-auto rounded-full mx-auto object-cover"
            />
          </Link>
        </button>

        {isOpen && (
          <div className="absolute top-[110px] right-2 bg-white border border-gray-300 shadow-md rounded-2xl cursor-pointer grid grid-cols-1">
            <div className="p-5 border">
              {/* Dodaj mechanizm wyświetlania ikony i nazwy użytkownika później */}
              <a href="" className="block relative">
                <img
                  alt="name"
                  src="/default_user.png"
                  className="w-full max-w-[144px] h-auto rounded-full mx-auto object-cover"
                />
              </a>

              <h3 className="text-black text-bold text-2xl">Gość</h3>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Profil</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Ustawienia</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Zarejestruj się</a>
              </h4>

              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Zaloguj się</a>
              </h4>
            </div>
          </div>
        )}
      </div>

      {/* ŚREDNIE I WIĘKSZE EKRANY */}
      <div className="hidden sm:flex items-center space-x-0">
        {/* Cennik */}
        <Link
          href="/"
          className="flex items-center rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
        >
          <span className="text-2xl text-black">Cennik</span>
        </Link>

        {/* Zaloguj */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition-colors"
          >
            <img
              alt="name"
              src="/default_user.png"
              className="w-full max-w-[144px] h-auto rounded-full mx-auto object-cover"
            />
          </Link>
        </button>

        {isOpen && (
          <div className="absolute top-[110px] right-2 bg-white border border-gray-300 shadow-md rounded-2xl cursor-pointer grid grid-cols-1">
            <div className="p-5 border">
              {/* Dodaj mechanizm wyświetlania ikony i nazwy użytkownika później */}
              <a href="" className="block relative">
                <img
                  alt="name"
                  src="/default_user.png"
                  className="w-full max-w-[144px] h-auto rounded-full mx-auto object-cover"
                />
              </a>

              <h3 className="text-black text-bold text-2xl">Gość</h3>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Profil</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Ustawienia</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Zarejestruj się</a>
              </h4>

              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">Zaloguj się</a>
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNav;
