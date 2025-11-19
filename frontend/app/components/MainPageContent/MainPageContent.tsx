"use client";

import Link from "next/link";

import PopularQuestions from "./PopularQuestions";
import InterestingArticles from "./InterestingArticles";
import BlogNews from "./BlogNews";
import Testimonials from "./TestimonialCards";

const MainPageContent = () => {
  return (
    <>
      <div className="pl-3 mb-12 w-full flex flex-col gap-8">
        <PopularQuestions />
        <InterestingArticles />
        <BlogNews />

        <div className=" w-full max-w-[1200px]">
          <div className="w-full max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 items-center">
              {/* --- ITEM 1 --- */}
              <div className="items-center text-center">
                <h1 className="text-orange-500 font-semibold text-2xl">
                  Bądź o krok przed innymi
                </h1>
                <h1 className="text-orange-500 font-semibold text-2xl">
                  z wyrokami Premium
                </h1>
                <h1 className="text-black font-medium">
                  Dostęp do wyroków KIO przed publikacją UZP, nawet 2 miesiące
                  wcześniej
                </h1>
              </div>

              {/* --- ITEM 2 --- */}
              <div className="items-center text-center">
                <h1 className="text-orange-500 font-semibold text-2xl">
                  Przeszukuj wszystko,
                </h1>
                <h1 className="text-orange-500 font-semibold text-2xl">
                  znajduj wszystko
                </h1>
                <h1 className="text-black font-medium">
                  Pełnotekstowa wyszukiwarka, najważniejsze fragmenty zawsze
                  wyróżnione i skondensowane
                </h1>
              </div>

              {/* --- ITEM 3 (trójkąt – center on MD) --- */}
              <div className="text-black p-4 md:col-span-2 md:mx-auto lg:col-span-1 text-center">
                <h1 className="text-orange-500 font-semibold text-2xl">
                  Wszystkie potrzebne funkcje
                </h1>
                <h1 className="text-orange-500 font-semibold text-2xl">
                  w jednym miejscu
                </h1>
                <h1 className="text-black font-semibold">
                  Kompleksowa baza wyroków
                </h1>
                <h1 className="text-black font-medium">
                  (KIO, SO, SN, TSUE, NSA/WSA, kontrole
                </h1>
                <h1 className="text-black font-medium">
                  UZP, opinie prawne UZP),
                </h1>
                <h1 className="text-black font-medium">
                  zaawansowane filtry, wyszukiwarka kodów CPV i wiele innych
                </h1>
                <h1 className="text-black font-medium"></h1>
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
    </>
  );
};

export default MainPageContent;
