"use client";

import Link from "next/link";

const InterestingArticles = () => {
  return (
    <>
      {/* Box  */}
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] gap-x-10 gap-y-6 text-gray-500 ">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 lg:w-[300px] h-[350px] relative">
            {/* Title  */}
            <Link href="#">
              <div className="relative pb-2 flex items-center gap-2">
                <h1 className="text-2xl text-black font-semibold">Popularne</h1>
                <span className="text-orange-500 font-bold text-xl">
                  &gt;&gt;
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-full"></div>
              </div>
            </Link>
            {/* Middle  */}
            <div className="text-black">
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
            </div>
            {/* Bottom  */}
            <Link
              href="#"
              className="text-orange-400 bottom-0  mt-auto hover:underline transition-colors duration-200 block"
            >
              więcej popularnych dokumentów
              <span> &gt;&gt;</span>
            </Link>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 lg:w-[300px] h-[350px] relative">
            {/* Title  */}
            <Link href="#">
              <div className="relative pb-2 flex items-center gap-2">
                <h1 className="text-2xl text-black font-semibold">Ciekawe</h1>
                <span className="text-orange-500 font-bold text-xl">
                  &gt;&gt;
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-full"></div>
              </div>
            </Link>
            {/* Middle  */}
            <div className="text-black">
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
            </div>
            {/* Bottom  */}
            <Link
              href="#"
              className="text-orange-400 bottom-0  mt-auto hover:underline transition-colors duration-200 block"
            >
              więcej ciekawych dokumentów
              <span> &gt;&gt;</span>
            </Link>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4 lg:w-[300px] h-[350px] relative">
            {/* Title  */}
            <Link href="#">
              <div className="relative pb-2 flex items-center gap-2">
                <h1 className="text-2xl text-black font-semibold">Nowe</h1>
                <span className="text-orange-500 font-bold text-xl">
                  &gt;&gt;
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-full"></div>
              </div>
            </Link>
            {/* Middle  */}
            <div className="text-black">
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-300 rounded-2xl p-2 transition-colors duration-200 block"
              >
                KIO 132321
              </Link>
            </div>
            {/* Bottom  */}
            <Link
              href="#"
              className="text-orange-400 bottom-0  mt-auto hover:underline transition-colors duration-200 block"
            >
              więcej nowych dokumentów
              <span> &gt;&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestingArticles;
