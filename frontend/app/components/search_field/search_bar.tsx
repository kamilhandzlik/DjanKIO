const SearchBar = () => {
  return (
    <>
      {/* MAŁE EKRANY */}
      <div className="sm:hidden w-full px-4 pb-4">
        <div className="flex items-center bg-white border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Wyszukaj orzeczenia po fragmencie lub słowach..."
            className="flex-1 px-4 py-3 outline-none text-gray-700"
          />
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 px-6 py-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ŚREDNIE I DUŻE EKRANY */}
      <div className="hidden sm:flex w-full justify-center px-4 pb-6">
        <div className="flex items-center bg-white border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200 rounded overflow-hidden w-full max-w-[1200px]">
          <input
            type="text"
            placeholder="Wyszukaj orzeczenia po fragmencie lub słowach..."
            className="flex-1 px-6 py-4 outline-none text-gray-700"
          />
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 px-8 py-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
