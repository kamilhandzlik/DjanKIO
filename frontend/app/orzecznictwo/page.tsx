"use client";
import InterestingArticles from "../components/MainPageContent/InterestingArticles";
import Categories from "../components/search_field/categories";
import SearchBar from "../components/search_field/search_bar";

const OrzecznictwoPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-50">
        <div className="w-full h-full bg-zinc-50 flex flex-col gap-0.5 py-10">
          <h1 className="text-center text-3xl text-gray-600 mt-4">
            Orzecznictwo
          </h1>
        </div>
        <div className="w-full  h-full bg-zinc-50 pl-3 mb-12 flex flex-col gap-8">
          <div className="w-full bg-gray-200">
            <Categories />
            <SearchBar />
          </div>
          <InterestingArticles />
        </div>
      </div>
    </>
  );
};

export default OrzecznictwoPage;
