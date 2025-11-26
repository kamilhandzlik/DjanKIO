"use client";

import Link from "next/link";

const Offers = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center">
        {/* ITEM 1 */}
        <div>
          {/* Tytuł sekcji */}
          <div className="relative pb-2 flex items-center justify-center w-[400px] mx-auto">
            <h1 className="text-orange-500 font-bold text-3xl">Dla 1 osoby</h1>
            <div className="absolute bottom-0 w-full h-[3px] bg-orange-500 rounded-full"></div>
          </div>

          {/* KARTA */}
          <div className="border-2 border-orange-500 rounded-2xl overflow-hidden mt-4 w-[380px] mx-auto">
            {/* Header */}
            <div className="bg-orange-500 py-4">
              <h2 className="text-white">Najczęściej wybierany plan</h2>
              <h1 className="text-white font-semibold text-2xl">Standardowy</h1>
            </div>

            {/* Treść */}
            <div className="flex flex-col items-center gap-4 py-6 px-4">
              <div>
                <h2 className="text-gray-600 font-medium text-lg">
                  Limit odsłon dokumentów
                </h2>
                <h1 className="text-black font-bold text-4xl">500</h1>
                <Link href="#" className="text-blue-500 text-lg">
                  Co oznacza ten limit?
                </Link>
              </div>

              <div>
                <h2 className="text-gray-600 font-medium text-lg">
                  Koszt 1 walidacji
                </h2>
                <h1 className="text-black font-bold text-4xl">10 odsłon</h1>
                <Link href="#" className="text-blue-500 text-lg">
                  Jak rozliczana jest walidacja?
                </Link>
              </div>

              <div>
                <h2 className="text-gray-600 font-medium text-lg">
                  Liczba kont
                </h2>
                <h1 className="text-black font-bold text-4xl">1</h1>
              </div>

              <div>
                <h1 className="text-black text-2xl">Opłata roczna</h1>
              </div>

              <div>
                <h1 className="text-green-500 font-bold text-4xl">
                  1500 zł netto
                </h1>
                <h1 className="text-black text-lg">
                  {(1500 * 1.23).toFixed(2)} zł brutto
                </h1>
              </div>

              {/* Przycisk */}
              <Link
                href="#"
                className="bg-orange-500 w-full rounded-xl py-4 mt-2 hover:bg-orange-600 transition-colors"
              >
                <h1 className="text-white font-semibold text-2xl">Zamawiam</h1>
              </Link>
            </div>
          </div>
        </div>
        {/* ITEM 2 */}
        <div>
          {/* Tytuł sekcji */}
          <div className="relative pb-2 flex items-center justify-center w-[400px] mx-auto">
            <h1 className="text-orange-500 font-bold text-3xl">Dla zespołu</h1>
            <div className="absolute bottom-0 w-full h-[3px] bg-orange-500 rounded-full"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-10 w-full">
            {/* KARTA 1*/}
            <div className="border-2 border-gray-500 rounded-2xl overflow-hidden mt-4 w-[380px] mx-auto">
              {/* Header */}
              <div className="bg-zinc-200 py-4">
                <h2 className="text-gray-700">Plan</h2>
                <h1 className="text-black font-semibold text-2xl">Zespół 2</h1>
              </div>

              {/* Treść */}

              <div className="flex flex-col items-center gap-4 py-6 px-4">
                <div>
                  <h2 className="text-gray-600 font-medium text-lg">
                    Limit odsłon dokumentów
                  </h2>
                  <h1 className="text-black font-bold text-4xl">1000</h1>
                  <Link href="#" className="text-blue-500 text-lg">
                    Co oznacza ten limit?
                  </Link>
                </div>

                <div>
                  <h2 className="text-gray-600 font-medium text-lg">
                    Koszt 1 walidacji
                  </h2>
                  <h1 className="text-black font-bold text-4xl">10 odsłon</h1>
                  <Link href="#" className="text-blue-500 text-lg">
                    Jak rozliczana jest walidacja?
                  </Link>
                </div>

                <div>
                  <h2 className="text-gray-600 font-medium text-lg">
                    Liczba kont
                  </h2>
                  <h1 className="text-black font-bold text-4xl">1-2</h1>
                </div>

                <div>
                  <h1 className="text-black text-2xl">Opłata roczna</h1>
                </div>

                <div>
                  <h1 className="text-green-500 font-bold text-4xl">
                    2500 zł netto
                  </h1>
                  <h1 className="text-black text-lg">
                    {(2500 * 1.23).toFixed(2)} zł brutto
                  </h1>
                </div>

                {/* Przycisk */}
                <Link
                  href="#"
                  className="bg-orange-500 w-full rounded-xl py-4 mt-2 hover:bg-orange-600 transition-colors"
                >
                  <h1 className="text-white font-semibold text-2xl">
                    Zamawiam
                  </h1>
                </Link>
              </div>
            </div>
            {/* KARTA 2*/}
            <div className="border-2 border-orange-500 rounded-2xl overflow-hidden mt-4 w-[380px] mx-auto">
              {/* Header */}
              <div className="bg-orange-500 py-4">
                <h2 className="text-white">Najczęściej wybierany plan</h2>
                <h1 className="text-white font-semibold text-2xl">Zespół 4</h1>
              </div>

              {/* Treść */}
              <div className="flex flex-col items-center gap-4 py-6 px-4">
                <div>
                  <h2 className="text-gray-600 font-medium text-lg">
                    Limit odsłon dokumentów
                  </h2>
                  <h1 className="text-black font-bold text-4xl">2000</h1>
                  <Link href="#" className="text-blue-500 text-lg">
                    Co oznacza ten limit?
                  </Link>
                </div>

                <div>
                  <h2 className="text-gray-600 font-medium text-lg">
                    Koszt 1 walidacji
                  </h2>
                  <h1 className="text-black font-bold text-4xl">10 odsłon</h1>
                  <Link href="#" className="text-blue-500 text-lg">
                    Jak rozliczana jest walidacja?
                  </Link>
                </div>

                <div>
                  <h2 className="text-gray-600 font-medium text-lg">
                    Liczba kont
                  </h2>
                  <h1 className="text-black font-bold text-4xl">1-4</h1>
                </div>

                <div>
                  <h1 className="text-black text-2xl">Opłata roczna</h1>
                </div>

                <div>
                  <h1 className="text-green-500 font-bold text-4xl">
                    5000 zł netto
                  </h1>
                  <h1 className="text-black text-lg">
                    {(5000 * 1.23).toFixed(2)} zł brutto
                  </h1>
                </div>

                {/* Przycisk */}
                <Link
                  href="#"
                  className="bg-orange-500 w-full rounded-xl py-4 mt-2 hover:bg-orange-600 transition-colors"
                >
                  <h1 className="text-white font-semibold text-2xl">
                    Zamawiam
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* ITEM 3 */}
        <div>
          {/* Tytuł sekcji */}
          <div className="relative pb-2 flex items-center justify-center w-[400px] mx-auto">
            <h1 className="text-orange-500 font-bold text-3xl">
              Szyty na miarę
            </h1>
            <div className="absolute bottom-0 w-full h-[3px] bg-orange-500 rounded-full"></div>
          </div>

          {/* KARTA */}
          <div className="border-2 border-gray-500 rounded-2xl overflow-hidden mt-4 w-[380px] mx-auto">
            {/* Header */}
            <div className="bg-zinc-200 py-4">
              <h2 className="text-gray-700">Najczęściej wybierany plan</h2>
              <h1 className="text-black font-semibold text-2xl">Standardowy</h1>
            </div>

            {/* Treść */}
            <div className="flex flex-col items-center gap-4 py-6 px-4">
              <div>
                <h2 className="text-gray-600 font-medium text-lg">
                  Limit odsłon dokumentów
                </h2>
                <h1 className="text-black font-bold text-4xl">500</h1>
                <Link href="#" className="text-blue-500 text-lg">
                  Co oznacza ten limit?
                </Link>
              </div>

              <div>
                <h2 className="text-gray-600 font-medium text-lg">
                  Koszt 1 walidacji
                </h2>
                <h1 className="text-black font-bold text-4xl">10 odsłon</h1>
                <Link href="#" className="text-blue-500 text-lg">
                  Jak rozliczana jest walidacja?
                </Link>
              </div>

              <div>
                <h2 className="text-gray-600 font-medium text-lg">
                  Liczba kont
                </h2>
                <h1 className="text-black font-bold text-4xl">1</h1>
              </div>

              <div>
                <h1 className="text-black text-2xl">Opłata roczna</h1>
              </div>

              <div>
                <h1 className="text-green-500 font-bold text-4xl">
                  1500 zł netto
                </h1>
                <h1 className="text-black text-lg">
                  {(1500 * 1.23).toFixed(2)} zł brutto
                </h1>
              </div>

              {/* Przycisk */}
              <Link
                href="#"
                className="bg-orange-500 w-full rounded-xl py-4 mt-2 hover:bg-orange-600 transition-colors"
              >
                <h1 className="text-white font-semibold text-2xl">Zamawiam</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
