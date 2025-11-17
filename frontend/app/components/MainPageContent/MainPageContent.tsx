"use client";

import Link from "next/link";

import PopularQuestions from "./PopularQuestions";
import InterestingArticles from "./InterestingArticles";

const MainPageContent = () => {
  return (
    <>
      <div className="pl-3 mb-12 w-full flex flex-col gap-8">
        <PopularQuestions />
        <InterestingArticles />
      </div>
    </>
  );
};

export default MainPageContent;
