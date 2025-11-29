"use client";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // lista pytań
  const items = [
    {
      question: "Co oznacza limit odsłon dokumentów?",
      answer: (
        <>
          <span className="font-semibold">Limit odsłon dokumentów</span>
          <span className="font px-1">
            oznacza sumaryczną liczbę odsłon dokumentów w czasie trwania usługi.
            Limit ten określa sumę odsłon dokumentów wszystkich użytkowników
            objętych planem subskrypcyjnym.
          </span>
        </>
      ),
    },
    {
      question: "Ile potrzebuję dokumentów? Jaki plan wybrać?",
      answer: (
        <>
          <span className="font-semibold">
            Po przekroczeniu limitu odsłon dokumentów
          </span>
          <span className="font px-1">
            dostęp przejdzie w tryb ograniczony i będzie wymagał zamówienia
            nowego planu dostępu.
          </span>
        </>
      ),
    },
    {
      question: "Wymiana odsłon dokumentów na inne usługi.",
      answer: (
        <>
          <span className="font px-1">
            Odsłony dokumentów to również wewnętrzna waluta SzuKIO. Mając
            wykupiony plan możesz wymieniać posiadane odsłony dokumentów na
            dowolną usługę (np. walidacji czy SpotKIO) oferowaną w SzuKIO.
          </span>
        </>
      ),
    },
    {
      question: "Jak sprawdzić moje użycie? (limit odsłon dokumentów)",
      answer: (
        <>
          <span className="font-semibold">Statystyki</span>
          <span className="font px-1">
            użycia dostępne są w ustawieniach użytkownika.
          </span>
        </>
      ),
    },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full">
      <div className=" py-10 px-4 text-center text-3xl text-gray-700">
        FAQ najczęściej zadawane pytania:
      </div>

      {items.map((item, i) => (
        <div
          key={i}
          className="w-full bg-zinc-50 border border-gray-300 shadow-md p-4 max-w-[1200px] mx-auto mb-10"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-6 text-orange-500 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>

            <h2 className="text-black text-2xl px-2 font-medium">
              {item.question}
            </h2>
          </button>

          {openIndex === i && (
            <div className="w-full flex flex-col items-center mt-8">
              <p className="text-[20px] text-gray-800 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
