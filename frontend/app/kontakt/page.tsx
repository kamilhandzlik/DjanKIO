import Wokanda from "../components/wokanda/wokanda";

const KontaktPage = () => {
  return (
    <>
      <div className="items-center grid grid-cols-1 py-10 px-10 w-full bg-zinc-100">
        <div className="bg-white border border-gray-300 shadow-md">
          <h1 className="text-3xl text-black text-center font-semibold">
            Skontaktuj się z nami
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
            <div className="py-10 px-10">
              <h1 className="text-0.5xl text-black font-semibold py-4 px-4">
                Twój adres e-mail
              </h1>

              <div className="flex items-center bg-white border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-200 rounded overflow-hidden">
                <input
                  type="text"
                  placeholder="Wpisz adres e-mail"
                  className="flex-1 px-4 py-3 outline-none text-gray-700"
                />
              </div>

              <div className="py-10">
                <h1 className="text-0.5xl text-black font-semibold py-4 px-4">
                  Treść wiadomości/zapytania
                </h1>
                <div className="flex items-center bg-white border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-200 rounded overflow-hidden">
                  <textarea
                    placeholder="Wpisz treść wiadomości/zapytania"
                    className="flex-1 px-4 py-20 outline-none text-gray-700"
                  />
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 px-10 py-4 rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">
                  Wysyłam zapytanie
                </span>
              </button>
            </div>
            <div className="py-10 px-10">
              <h1 className="text-3xl text-black font-semibold py-4 px-4">
                Dane firmy
              </h1>
              <div className="flex items-center gap-2 px-4 text-black font-semibold cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 7.87 6.38 14.25 14.25 14.25.86 0 1.7-.08 2.52-.23a1.5 1.5 0 001.23-1.48v-2.7a1.5 1.5 0 00-1.04-1.43l-2.6-.87a1.5 1.5 0 00-1.64.45l-.97 1.18a12.04 12.04 0 01-5.43-5.43l1.18-.97a1.5 1.5 0 00.45-1.64l-.87-2.6A1.5 1.5 0 006.71 3H4a1.5 1.5 0 00-1.48 1.23c-.15.82-.23 1.66-.23 2.52z"
                  />
                </svg>

                <a
                  className="text-orange-500 hover:underline decoration-orange-500 underline-offset-2"
                  href="tel:+48343435028"
                >
                  34 343 50 28
                </a>
                <span className="text-black">@</span>
                {/* TODO: uzupełnić mail po podpięciu gmail */}
                <a
                  className="text-orange-500 hover:underline decoration-orange-500 underline-offset-2"
                  href="mailto:kontakt@djabkio.pl"
                >
                  kontakt@djabkio.pl
                </a>
              </div>

              <div className="px-4">
                <h3 className="text-black text-0.5xl">DjabKIO John Doe</h3>
                <h3 className="text-black text-0.5xl">ul. XXXX XXXXX 00/00</h3>
                <h3 className="text-black text-0.5xl">XX-XXX Miejscowość</h3>
              </div>
              <h3 className="text-black text-0.5xl px-4 py-6">
                NIP: XXX-XXX-XX-XX, REGON:XXXXXXXXX
              </h3>
              <div className="px-4">
                <h3 className="text-black text-0.5xl">
                  numer konta bankowego:
                </h3>
                <h3 className="text-black text-0.5xl">
                  XX XXXX XXXX XXXX XXXX XXXX XXXX
                </h3>
                <h3 className="text-black text-0.5xl">
                  nazwa banku: NAZWA BANKU
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Wokanda />
      </div>
    </>
  );
};

export default KontaktPage;
