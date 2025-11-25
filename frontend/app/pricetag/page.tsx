"use client";
import Image from "next/image";

import SignatureBanner from "../components/PricetagContent/signatureBanner";
import Offers from "../components/PricetagContent/offers";

const PriceTagPage = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-zinc-50 flex flex-col gap-0.5">
        <div className="w-[200px] h-[200px] flex items-center justify-center mx-auto py-10">
          <Image
            src="/djankio-mark-flat.png"
            alt="Price Tag Banner"
            width={200}
            height={200}
            className=" object-cover"
          />
        </div>
        <h1 className="text-center text-3xl text-gray-600 mt-4">
          Zamów plan dopasowany do Twoich potrzeb
        </h1>

        <SignatureBanner />
        <Offers />
      </div>
    </>
  );
};

export default PriceTagPage;
