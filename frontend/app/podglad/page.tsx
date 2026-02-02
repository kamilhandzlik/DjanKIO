import Wokanda from "../components/wokanda/wokanda";

export default function PodgladPage() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-black text-3xl font-semibold">
        Tytuł sprawy np: Wyrok Krajowej Izby Odwoławczej z dnia 2025-10-29, KIO
        3917/25
      </h1>
      <p className="text-gray-500 text-xl">Treść podglądu sprawy...</p>
      <br />
      <div className="px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md">
        <a href="#" className="text-gray-500 text-center text-xl">
          powrót do wyników wyszukiwania
        </a>
      </div>
      <Wokanda />
    </div>
  );
}
