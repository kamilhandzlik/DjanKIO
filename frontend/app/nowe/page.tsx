"use client";

import { useState } from "react";

// Mockowane dane — frontend-only
const MOCK_DAYS = [
  {
    date: "2025-11-25",
    items: [
      {
        title: "KIO 920/25 – Wyrok KIO – 2025-03-28",
        snippet:
          "Zamawiający nie może zastępować wykonawcy w wykazywaniu, że cena jego oferty jest realna...",
      },
    ],
  },
  {
    date: "2025-11-14",
    items: [
      {
        title: "KIO 1067/25 – Wyrok KIO – 2025-04-08",
        snippet:
          "Przepisy ustawy Pzp nie zabraniają zamawiającemu wyznaczania dodatkowych terminów wizji lokalnej...",
      },
    ],
  },
];

const FILTERS = ["Ostatnie", "2025-11-25", "2025-11-14", "Losowe"];

export default function NowePage() {
  const [activeFilter, setActiveFilter] = useState("Ostatnie");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Tytuł */}
      <h1 className="text-3xl font-bold text-gray-900 leading-tight">
        Ciekawe zdania z najnowszych wyroków KIO.{" "}
        <span className="text-orange-600">
          KIOSK z ciekawymi zdaniami z wyroków
        </span>
      </h1>

      {/* Filtry */}
      <div className="flex flex-wrap gap-3 mt-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full border text-sm transition 
            ${
              activeFilter === f
                ? "bg-orange-600 text-white border-orange-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-orange-600 hover:text-orange-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Lista wpisów */}
      <div className="mt-10 space-y-14">
        {MOCK_DAYS.map((day) => (
          <div key={day.date}>
            <h2 className="text-xl font-semibold mb-4 text-gray-500">
              Dodane w dniu: <span className="text-orange-600">{day.date}</span>
            </h2>

            <div className="space-y-8">
              {day.items.map((item, index) => (
                <article
                  key={index}
                  className="border-l-4 border-orange-500 pl-4"
                >
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {item.snippet}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Premium (na mocku bez funkcjonalności) */}
      <div className="mt-14 text-center text-orange-600 font-semibold">
        Premium
      </div>
    </div>
  );
}
