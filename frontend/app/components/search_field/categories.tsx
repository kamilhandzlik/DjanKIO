const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex space-x-12 justify-center">
      <div className="bg-white border shadow-md hover:shadow-xl transition-shadow duration-200 relative group">
        <div className="text-black px-2 py-0.5 flex flex-row ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <p className="px-2"> wszędzie</p>
        </div>
        <div className="text-gray-500 px-2">1234</div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>

      <div className="bg-white border shadow-md hover:shadow-xl transition-shadow duration-200 relative group">
        <div className="text-black px-2 py-0.5">KIO</div>
        <div className="text-gray-500 px-2">1234</div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>

      <div className="bg-white border shadow-md hover:shadow-xl transition-shadow duration-200 relative group">
        <div className="text-black px-2 py-0.5">SO</div>
        <div className="text-gray-500 px-2">1234</div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
    </div>
  );
};

export default Categories;
