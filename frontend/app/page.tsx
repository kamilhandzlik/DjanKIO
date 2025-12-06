import Navbar from "./components/Navbar";
import SearchField from "./components/search_field/search";
import MainPageContent from "./components/MainPageContent/MainPageContent";
import Wokanda from "./components/wokanda/wokanda";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 flex flex-col gap-6">
      <Navbar />

      <div className="w-full flex flex-col items-center pt-24">
        <SearchField />
      </div>

      <MainPageContent />
      <Wokanda />
    </div>
  );
}
