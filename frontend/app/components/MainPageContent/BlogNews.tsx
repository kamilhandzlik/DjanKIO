"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogItems = [
  {
    id: 1,
    title: "Zmiany w rozporządzeniach",
    image: "/zmiany.png",
    date: "2020-10-10",
    description:
      "Zmiana rozporządzenia w sprawie podmiotowych środków dowodowych oraz innych dokumentów lub oświadczeń, jakich może żądać zamawiający od wykonawcy",
  },
  {
    id: 2,
    title: "Progi",
    image: "/progi.png",
    date: "2020-10-10",
    description:
      "Nowe progi unijne i ich równowartości w złotych będą obowiązywały od 1 stycznia 2026 r.",
  },
  {
    id: 3,
    title: "Zmiany w ustawie",
    image: "/zmiany_ustawa.png",
    date: "2020-10-10",
    description:
      "Zmiany wysokości wynagrodzenia w umowach zawartych na okres dłuższy niż 6 miesięcy.",
  },
  {
    id: 4,
    title: "Nowy kurs złotego w stosunku do euro i nowe progi unijne.",
    image: "/kurs.png",
    date: "2020-10-10",
    description:
      "Nowy kurs złotego w stosunku do euro i nowe progi unijne. Od 1 stycznia 2024 r. obowiązują nowe progi unijne.",
  },
  {
    id: 5,
    title: "Oferta pracy w DjanKIO",
    image: "/praca.png",
    date: "2020-10-10",
    description:
      "Poszukujemy programisty Next.js do naszego zespołu frontendowego. Dołącz do nas i rozwijaj swoje umiejętności w dynamicznym środowisku!",
  },
];

const BlogNews = () => {
  const [hoverdItem, setHoverdItem] = useState(blogItems[0]);
  return (
    <>
      <div className="w-full max-w-[1200px]">
        {/* Title */}
        <div className="text-2xl font-semibold text-black mb-4">
          Nowości na blogu:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {/* -------- Kolumna 1 -------- */}
          <div className="text-black flex flex-col gap-3">
            <div className="w-full h-[200px] bg-gray-200 relative rounded-2xl overflow-hidden">
              {hoverdItem && (
                <Image
                  src={hoverdItem.image}
                  alt={hoverdItem.title}
                  fill
                  className="object-cover transition-all duration-300"
                />
              )}
            </div>
            <div className="text-lg font-medium">{hoverdItem.title}</div>
            <div className="text-sm text-gray-500">
              {hoverdItem.description}
            </div>
          </div>

          {/* -------- Kolumna 2 -------- */}
          <div className="text-black flex flex-col gap-2">
            {blogItems.map((item) => (
              <Link key={item.id} href="#">
                <button
                  key={item.id}
                  className="text-left  hover:text-orange-500 transition-all"
                  onMouseEnter={() => setHoverdItem(item)}
                >
                  <h1 className="text-gray-500 text-2xl hover:text-orange-500 transition-all">
                    {item.title}
                  </h1>
                  {item.date}
                </button>
              </Link>
            ))}
          </div>

          {/* -------- Kolumna 3 -------- */}
          <div className="text-black">
            <Link href="/blog">
              <div className="w-full h-[400px] bg-gray-100 rounded-xl flex flex-col items-center justify-center hover:bg-gray-200 transition-all cursor-pointer">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/e-KRK.png"
                    alt="e-KRK"
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="font-semibold mt-3">Przejdź do bloga</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNews;
