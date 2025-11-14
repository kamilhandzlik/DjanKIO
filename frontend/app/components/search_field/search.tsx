"use client";
import Link from "next/link";

const SearchField = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* MAŁE EKRANY */}
      <div className="sm:hidden flex justify-center w-full py-4">
        <div className="w-full max-w-[1200px] flex justify-center">
          <Link href="/">
            <img
              src="/djankio_image_main_small.png"
              alt="djankio_image_main_small"
              className="w-full max-w-[860px] h-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* DUŻE EKRANY */}
      <div className="hidden sm:flex justify-center w-full py-6">
        <div className="w-full max-w-[1200px] flex justify-center">
          <Link href="/">
            <img
              src="/djankio_image_main_large.png"
              alt="djankio_image_main_large"
              className="w-full h-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchField;
