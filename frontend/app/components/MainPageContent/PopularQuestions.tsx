"use client";

import Link from "next/link";
import { useState } from "react";

const PopularQuestions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[1200px]">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-orange-400 hover:text-orange-600 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>
        </button>

        <h1 className="text-2xl font-semibold text-black">
          Popularne zapytania
        </h1>
      </div>

      {/* BOX */}
      {isOpen && (
        <div className="border border-gray-200 shadow-md bg-white rounded-lg p-6 lg:w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] gap-x-10 gap-y-6 text-gray-500 ">
            {/* KOLUMNA 1 */}
            <div className="flex flex-col gap-2 lg:w-[400px]">
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                Oświadczenia wykonawców
              </Link>
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                rażąco niska cena wyjaśninia
              </Link>
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                art. 117
              </Link>
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                Wykonawca nie złożył formularza ofertowego
              </Link>
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100 text-orange-500"
                href="/"
              >
                Zobacz popularne dokumenty
              </Link>
            </div>

            {/* KOLUMNA 2 */}
            <div className="flex flex-col gap-2">
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                Sumowanie doświadczeń konsorcjów
              </Link>
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                art. 128 ust. 5
              </Link>
            </div>

            {/* KOLUMNA 3 */}
            <div className="flex flex-col gap-2">
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                zmowa przetargowa
              </Link>
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                VAT
              </Link>
              <Link
                className="cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 before:content-['>>'] hover:shadow-md hover:bg-zinc-100"
                href="/"
              >
                zakaz podwykonawstwa
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularQuestions;
