"use client";

import { useState } from "react";
import Wokanda from "../components/wokanda/wokanda";

export default function PasswordRecoveryView() {
  const [form, setForm] = useState({
    email: "",
  });

  const [error, setError] = useState<{ email?: string }>({});
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string } = {};

    if (!form.email) {
      newErrors.email = "E-mail jest wymagany";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      setSuccess("");
      return;
    }

    setError({});
    setSuccess("Instrukcje odzyskania hasła zostały wysłane na e-mail 📩");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div className="py-4 px-5 border border-gray-300 rounded shadow">
          <h2 className="text-gray-500">
            Jeśli zapomniałeś hasła do swojego konta, podaj adres e-mail, na
            który konto zostało zarejestrowane. Wyślemy Ci dalsze instrukcje
            odzyskania hasła.
          </h2>
          <p className="flex justify-between items-center">
            <strong className="mt-4 text-black text-2xl font-semibold">
              Odzyskiwanie hasła
            </strong>
            <a
              href="#"
              className="text-orange-500 underline ml-1 hover:text-orange-700"
            >
              Logowanie
            </a>
          </p>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Wpisz adres email"
            className={`w-full mt-4 p-2 border rounded text-gray-500 ${
              error.email ? "border-red-500" : "border-gray-300"
            }`}
          />

          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}

          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}

          <button
            type="submit"
            className="mt-4 bg-orange-500 py-4 text-lg w-full hover:bg-orange-700 text-white rounded"
          >
            Wyślij
          </button>
        </div>
      </form>

      <Wokanda />
    </div>
  );
}
