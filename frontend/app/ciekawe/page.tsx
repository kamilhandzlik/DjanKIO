"use client";
import Link from "next/link";
import Wokanda from "../components/wokanda/wokanda";

const CiekawePage = () => {
  return (
    <div className="w-full h-full bg bg-white">
      <div className="grid grid-cols-3 p-4 gap-4">
        <Link href="/next">
          <h1 className="text-orange-500 text-center hover:text-orange-700">
            następna strona
          </h1>
        </Link>
        <div className="grid grid-cols-1">
          <h1 className="text-black font-bold text-3xl">październik, 2025</h1>
          <div className="py-4">
            <h1 className="text-black font-semibold text-2xl">
              24 paź, piątek
            </h1>
            <Link href="/next">
              <h1 className="text-orange-500 text-2xl hover:text-orange-700">
                link do strony
                {/* nazwa strony jak już dodasz backend */}
              </h1>
            </Link>
            <h1 className="text-black ">
              (...) Zamawiający jest zobowiązany poprawić omyłkę w szczególności
              wtedy, gdy sposób, w jaki ma być dokonana poprawa, wynika z innych
              elementów składających się na ofertę (...)
            </h1>
          </div>
          <div className="py-4">
            <h1 className="text-black font-semibold text-2xl">
              13 paź, poniedziałek
            </h1>
            <Link href="/next">
              <h1 className="text-orange-500 text-2xl hover:text-orange-700">
                link do strony
                {/* nazwa strony jak już dodasz backend */}
              </h1>
            </Link>
            <h1 className="text-black ">
              (...) Zamawiający jest zobowiązany poprawić omyłkę w szczególności
              wtedy, gdy sposób, w jaki ma być dokonana poprawa, wynika z innych
              elementów składających się na ofertę (...)
            </h1>
          </div>
          <div className="py-4">
            <h1 className="text-black font-semibold text-2xl">1 paź, środa</h1>
            <Link href="/next">
              <h1 className="text-orange-500 text-2xl hover:text-orange-700">
                link do strony
                {/* nazwa strony jak już dodasz backend */}
              </h1>
            </Link>
            <h1 className="text-black ">
              (...) Zamawiający jest zobowiązany poprawić omyłkę w szczególności
              wtedy, gdy sposób, w jaki ma być dokonana poprawa, wynika z innych
              elementów składających się na ofertę (...)
            </h1>
          </div>
        </div>
        <Link href="/previous">
          <h1 className="text-orange-500 text-center hover:text-orange-700">
            poprzednia strona
          </h1>
        </Link>
      </div>
      <Wokanda />
    </div>
  );
};

export default CiekawePage;
