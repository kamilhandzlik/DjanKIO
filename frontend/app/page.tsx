import Navbar from "./components/Navbar";
import SearchField from "./components/search_field/search";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 flex flex-col items-center gap-12">
      <Navbar />

      <div className="w-full flex flex-col items-center pt-24">
        <SearchField />
      </div>

      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white"></main>
    </div>
  );
}
