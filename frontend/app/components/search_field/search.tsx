"use client";
import Link from "next/link";

import Categories from "./categories";
import SearchBar from "./search_bar";

const SearchField = () => {
  return (
    <>
      <div className="w-full bg-gray-200">
        {/* MAŁE EKRANY */}
        <div className="sm:hidden flex flex-col justify-center w-full py-4">
          <div className="w-full max-w-[1200px] flex justify-center">
            <Link href="/">
              <img
                src="/djankio_image_main_small.png"
                alt="djankio_image_main_small"
                className="w-full max-w-[860px] h-auto cursor-pointer"
              />
            </Link>
          </div>
          <Categories />
          <SearchBar />
        </div>

        {/* DUŻE EKRANY */}
        <div className="hidden sm:flex flex-col items-start w-full py-6 px-4">
          <div className="w-full max-w-[1200px]">
            <Link href="/">
              <img
                src="/djankio_image_main_large.png"
                alt="djankio_image_main_large"
                className="w-full h-auto cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-full max-w-[1200px]">
            <Categories />
          </div>
          <div className="w-full max-w-[1200px]">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchField;
