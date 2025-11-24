"use client";

import Link from "next/link";
import Image from "next/image";

const SignatureBanner = () => {
  return (
    <Link
      href="/pricetag"
      className="group w-full max-w-[1200px] mx-auto border border-gray-300 rounded-md overflow-hidden cursor-pointer grid grid-cols-1 md:grid-cols-2 bg-white"
    >
      {/* LEWA STRONA */}
      <div className="p-10 flex flex-col gap-4 justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 leading-snug">
          Chcesz potwierdzić ważność podpisu elektronicznego?
        </h2>

        <p className="text-gray-600 text-lg">
          Nowa usługa kwalifikowanej walidacji dostępna w każdym planie DjanKIO
        </p>

        <div className="flex items-center gap-4 pt-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="object-contain"
          />

          <span className="text-4xl font-light text-gray-400">+</span>

          <Image
            src="/asseco-logo.png"
            alt="Asseco Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* PRAWA STRONA — OBRAZ */}
      <div className="relative w-full h-[220px] md:h-full">
        <Image
          src="/writing-man.png"
          alt="Piszący mężczyzna"
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition duration-300"
        />
      </div>
    </Link>
  );
};

export default SignatureBanner;
