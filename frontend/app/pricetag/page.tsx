"use client";
import Image from "next/image";

import SignatureBanner from "../components/PricetagContent/signatureBanner";
import Offers from "../components/PricetagContent/offers";
import Testimonials from "../components/MainPageContent/TestimonialCards";
import Questions from "../components/PricetagContent/questions";
import FAQ from "../components/PricetagContent/FAQ";
import Wokanda from "../components/wokanda/wokanda";

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

        <div className=" w-full ">
          <div className="w-full ">
            <div className="py-10 px-4">
              <h1 className="text-gray-500 text-4xl text-center">
                Każdy plan zawiera wszystko,
              </h1>
              <h1 className="text-gray-500 text-4xl text-center">
                czego zamówienia publiczne potrzebują.
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 py-10 items-center">
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
          <Testimonials />

          <div className="w-full ">
            <div className="py-10 px-4">
              <h1 className="text-gray-500 text-4xl text-center">
                Skontaktuj się z nami
              </h1>
              <h1 className="text-gray-500 text-xl text-center">
                Zapraszamy do kontaktu. Z miłą chęcią dokładnie wskażemy Ci
                nasze zalety,
              </h1>
              <h1 className="text-gray-500 text-xl text-center">
                zaprezentujemy system i porozmawiamy o Twoich potrzebach.
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 ">
                <div className="grid-cols-1">
                  <h1 className="text-black text-center  text-xl mt-6">
                    Opiekun
                  </h1>
                  <h1 className="text-orange-500 text-center  text-xl mt-6">
                    John Doe
                  </h1>
                </div>
                <div className="grid-cols-1">
                  <h1 className="text-black text-center  text-xl mt-6">
                    Telefon
                  </h1>
                  <h1 className="text-orange-500 text-center  text-xl mt-6">
                    XXX XXX XXX
                  </h1>
                </div>
                <div className="grid-cols-1">
                  <h1 className="text-black text-center  text-xl mt-6">
                    E-mail
                  </h1>
                  <h1 className="text-orange-500 text-center  text-xl mt-6">
                    JohnDoe@XXXXXX.XX
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Questions />
          <FAQ />
          <Wokanda />
        </div>
      </div>
    </>
  );
};

export default PriceTagPage;
