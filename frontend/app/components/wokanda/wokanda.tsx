"use client";

export default function Wokanda() {
  return (
    <div className="w-full pb-20">
      {/* Górny tytuł */}
      <div className="border-b border-gray-200 py-6">
        <h1 className="text-3xl font-semibold text-center text-gray-500">
          Wokanda <span className="text-orange-600">DjanKIO</span> – statystyki
        </h1>
      </div>

      {/* Menu miesięcy */}
      <div className="flex justify-center gap-6 mt-4 text-sm">
        {[
          "grudzień 2025",
          "listopad 2025",
          "październik 2025",
          "wrzesień 2025",
          "sierpień 2025",
          "lipiec 2025",
          "czerwiec 2025",
        ].map((miesiac, i) => (
          <button
            key={i}
            className="text-gray-700 hover:text-orange-600 transition"
          >
            {miesiac}
          </button>
        ))}
      </div>

      {/* Główna siatka */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* WYSZUKIWARKA */}
        <div>
          <h2 className="text-xl text-gray-500 font-semibold mb-4">
            Wyszukiwarka
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li className="font-semibold">Krajowa Izba Odwoławcza</li>
            <li className="text-orange-600 cursor-pointer">
              Wyrok Uchwała Postanowienie
            </li>
            <li className="text-orange-600 cursor-pointer">
              Postanowienie ws. wniosku o uchylenie zakazu zawarcia umowy
            </li>

            <li className="font-semibold mt-4">Sąd Okręgowy</li>
            <li className="text-orange-600 cursor-pointer">
              Wyrok Postanowienie
            </li>

            <li className="font-semibold mt-4">Urząd Zamówień Publicznych</li>
            <li className="text-orange-600 cursor-pointer">
              Kontrola Interpretacja przepisów Komunikat Wzór dokumentu
            </li>

            <li className="font-semibold mt-4">TSUE</li>
            <li className="text-orange-600 cursor-pointer">
              Wyrok Orzeczenie Postanowienie Opinia Rzecznika
            </li>
            <li className="text-orange-600 cursor-pointer">
              Wniosek o wydanie orzeczenia w trybie prejudycjalnym
            </li>

            <li className="font-semibold mt-4">Sąd Najwyższy</li>
            <li className="text-orange-600 cursor-pointer">
              Wyrok Uchwała Postanowienie
            </li>

            <li className="font-semibold mt-4">Sąd Administracyjny</li>
            <li className="text-orange-600 cursor-pointer">
              Wyrok Uchwała Postanowienie
            </li>

            <li className="font-semibold mt-4">Główna Komisja Orzekająca</li>
            <li className="text-orange-600 cursor-pointer">
              Wyrok Orzeczenie Postanowienie
            </li>

            <li className="font-semibold mt-4">Prasa</li>
            <li className="text-orange-600 cursor-pointer">BzG Blog</li>

            <li className="font-semibold mt-4">Zespół Arbitrów</li>
            <li className="text-orange-600 cursor-pointer">
              Wyrok Postanowienie
            </li>
          </ul>
        </div>

        {/* NARZĘDZIA */}
        <div>
          <h2 className="text-xl text-gray-500 font-semibold mb-4">
            Narzędzia
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li className="font-semibold">Indeks Tematyczny</li>

            {[
              2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
              2014, 2013, 2012, 2011, 2010, 2009,
            ].map((rok) => (
              <li
                key={rok}
                className="text-orange-600 cursor-pointer capitalize"
              >
                indeks tematyczny {rok}
              </li>
            ))}

            <li className="font-semibold mt-4">CPV</li>
            <li className="text-orange-600 cursor-pointer">
              wyszukiwarka kodów cpv
            </li>
          </ul>
        </div>

        {/* INFORMACJE */}
        <div>
          <h2 className="text-xl text-gray-500 font-semibold mb-4">
            Informacje
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li className="text-orange-600 cursor-pointer">
              oferta – cennik – zamówienia
            </li>
            <li className="text-orange-600 cursor-pointer">
              polityka prywatności
            </li>
            <li className="text-orange-600 cursor-pointer">
              cookies, ciasteczka
            </li>
            <li className="text-orange-600 cursor-pointer">regulamin</li>
            <li className="text-orange-600 cursor-pointer">kontakt</li>
          </ul>

          {/* Kontakt */}
          <h3 className="mt-8 font-semibold text-lg text-gray-500">Kontakt</h3>
          <p className="mt-2 text-gray-700">
            telefon: 34 343 50 28 <br />
            email: <span className="text-orange-600">szukio@szukio.pl</span>
          </p>

          {/* Dane firmy */}
          <h3 className="mt-6 font-semibold text-lg text-gray-500">
            Dane firmy
          </h3>
          <p className="mt-2 text-gray-700 leading-relaxed">
            LSLABS Maciej Tomaka <br />
            ul. Jana Kilińskiego 42/44/23, <br />
            42-202 Częstochowa <br />
            <br />
            NIP: 927-175-85-35, REGON: 080147815
          </p>
        </div>
      </div>
    </div>
  );
}
