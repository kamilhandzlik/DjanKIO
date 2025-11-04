"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center space-x-2">
      <div className="bg-white rounded-full px-3 hover:bg-gray-200 transition-colors">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-[45px] h-[45px] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {isOpen && (
          <div className=" absolute top-[110px] left-2  bg-white border border-gray-300 shadow-md rounded-2xl cursor-pointer grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="p-4 border ">
              <h3 className="text-black text-bold text-2xl">BAZA WIEDZY</h3>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">orzecznictwo</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">ustawa Pzp</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">zawartość</a>
              </h4>
            </div>
            <div className="p-4 border ">
              <h3 className="text-black text-bold text-2xl">AKTUALNOŚCI</h3>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">blog</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">popularne</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">ciekawe</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">nowe</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">wokanda</a>
              </h4>
            </div>
            <div className="p-4 border ">
              <h3 className="text-black text-bold text-2xl">NARZĘDZIA</h3>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">kody CPV</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">indeks tematyczny</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">sumy kontrolne</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">analiza PDF/PAdES</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">walidacja</a>
              </h4>

              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">terminy</a>
              </h4>

              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">wzory</a>
              </h4>
            </div>
            <div className="p-4 border ">
              <h3 className="text-black text-bold text-2xl">EDUKACJA</h3>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">SpotKIO</a>
              </h4>
            </div>
            <div className="p-4 border ">
              <h3 className="text-black text-bold text-2xl">O DJANKIO</h3>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">cennik</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">kontakt</a>
              </h4>
              <h4 className="text-gray-500 hover:bg-gray-200 rounded-2xl">
                <a href="">zawartość</a>
              </h4>
            </div>
          </div>
        )}
      </div>

      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={180} height={38} />
      </Link>
    </nav>
  );
};

export default Navigation;
