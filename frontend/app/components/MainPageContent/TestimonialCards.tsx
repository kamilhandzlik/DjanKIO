import React from "react";

const Testimonials = () => {
  const data = [
    {
      quote:
        "Narzędzie, które naprawdę ułatwia życie. Szybki dostęp do informacji i zero zbędnego klikania.",
      author: "mec. John Doe",
      position: "radca prawny",
      company: "Kancelaria",
    },
    {
      quote:
        "Korzyści? Natychmiastowe. Gdybym miał pracować bez tego rozwiązania, pewnie bym płakał nad klawiaturą.",
      author: "mec. John Doe",
      position: "radca prawny",
      company: "Kancelaria",
    },
    {
      quote:
        "Najbardziej cenię prostotę i intuicyjność. To narzędzie po prostu robi robotę.",
      author: "mec. John Doe",
      position: "autor bloga",
      company: "Kancelaria",
    },
    {
      quote:
        "Szybko znajduję dokładnie to, czego potrzebuję. W codziennej pracy – bezcenne.",
      author: "John Doe",
      position: "radca prawny",
      company: "Kancelaria",
    },
  ];

  return (
    <div className="w-full max-w-[1200px]">
      <div className="w-full flex flex-col items-center py-10 bg-zinc-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1300px] px-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-white shadow-md rounded-xl border border-orange-300 overflow-hidden"
            >
              <div className="bg-orange-500 text-white p-6 leading-relaxed h-[260px] flex items-start text-2xl">
                <span>“{item.quote}”</span>
              </div>

              <div className="p-5 text-sm bg-white h-[160px]">
                <p className="text-zinc-600 font-semibold text-xl">
                  {item.author}
                </p>
                <p className="text-zinc-600 text-xl">{item.position}</p>
                <p className="mt-2 font-semibold text-orange-600 text-xl">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
