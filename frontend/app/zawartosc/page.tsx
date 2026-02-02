"use client";

import { useEffect, useState } from "react";
import Wokanda from "../components/wokanda/wokanda";

// docelowo: dane będą przychodziły z backendu (API)
// np. GET /api/indexy
export default function PodgladPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔌 tutaj później podpinasz prawdziwy backend
        // const res = await fetch("/api/indexy");
        // const data = await res.json();

        // mock danych (żeby UI już żyło)
        const data = [
          { id: 1, label: "Indeks Sprawy", value: "Sprawa KIO" },
          { id: 2, label: "Indeks Sprawy", value: "Sprawa KIO" },
          { id: 3, label: "Indeks Sprawy", value: "Sprawa KIO" },
          { id: 4, label: "Indeks Sprawy", value: "Sprawa KIO" },
        ];

        setItems(data);
      } catch (err) {
        setError("Nie udało się pobrać danych");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Zawartość Bazy
      </h1>

      {loading && <p className="text-gray-500">Ładowanie danych…</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white"
            >
              <a
                href="#"
                className="text-orange-500 text-lg font-medium hover:underline"
              >
                {item.label}
              </a>
              <p className="text-gray-900 text-lg font-semibold mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* sekcja statystyk / wokandy */}
      <Wokanda />
    </div>
  );
}
