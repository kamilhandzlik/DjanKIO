export default function LoginView() {
  return (
    <div className="space-y-4 mt-6">
      <div className="py-1">
        <h3 className="text-black font-semibold text-xl">E-mail:</h3>
        <input
          type="email"
          className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded text-gray-500"
          placeholder="Wpisz swój e-mail"
        />
      </div>
      <div className="py-1">
        <p className="flex justify-between items-center">
          <strong className="text-black font-semibold text-xl">Hasło:</strong>
          <a
            href="#"
            className="text-orange-500 underline ml-1 hover:text-orange-700"
          >
            Nie pamiętasz hasła?
          </a>
        </p>
        <input
          type="password"
          className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded text-gray-500"
          placeholder="Wpisz swóje hasło"
        />
      </div>
      <p>
        <strong className="text-black font-semibold">akceptuję</strong>
        <a
          href="#"
          className="text-orange-500 underline ml-1 hover:text-orange-700"
        >
          regulamin
        </a>
      </p>
      <p>
        <strong className="text-gray-500">Zgodnie z</strong>{" "}
        <a
          href="#"
          className="text-blue-500 underline ml-1 hover:text-blue-700"
        >
          RODO
        </a>
        <strong className="text-gray-500">
          {" "}
          możesz kwestionować przetwarzanie, domagać się dostępu i przeniesienia
          danych osobowych oraz wnieść skargę do{" "}
        </strong>
        <a
          href="#"
          className="text-blue-500 underline ml-1 hover:text-blue-700"
        >
          UODO
        </a>
      </p>
      <br />
      <button className="bg-orange-500 py-4 text-lg w-full hover:bg-orange-700">
        Zaloguj
      </button>

      <p>
        <strong className="text-gray-500">Nie pamiętasz hasła?</strong>
        <a
          href="#"
          className="text-orange-500 underline ml-1 hover:text-orange-700"
        >
          Odzyskaj hasło
        </a>
      </p>
    </div>
  );
}
