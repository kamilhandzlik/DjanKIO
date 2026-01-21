"use-client";

import { useState } from "react";

export default function LoginView() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.email) newErrors.email = "E-mail jest wymagany";
    if (form.password.length < 6)
      newErrors.password = "Hasło musi mieć minimum 6 znaków";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Hasła nie są takie same";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    alert("Zalogowałeś się pomyślnie!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div className="space-y-4 mt-6">
        <div>
          <h3 className="font-semibold text-xl text-black">E-mail:</h3>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Wpisz adres e-mail"
            className={`w-full mt-2 p-2 border rounded text-gray-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="py-1">
          <p className="flex justify-between items-center">
            <strong className="text-black font-semibold text-xl">Hasło:</strong>
            <a
              href="#"
              className="text-orange-500 underline ml-1 hover:text-orange-700"
            >
              Nie pamiętasz hasła?
            </a>
          </p>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Wpisz hasło"
            className={`w-full mt-2 p-2 border rounded text-gray-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1 ">{errors.password}</p>
          )}
        </div>

        <p>
          <strong className="text-gray-500">Zgodnie z</strong>{" "}
          <a
            href="#"
            className="text-blue-500 underline ml-1 hover:text-blue-700"
          >
            RODO
          </a>
          <strong className="text-gray-500">
            {" "}
            możesz kwestionować przetwarzanie, domagać się dostępu i
            przeniesienia danych osobowych oraz wnieść skargę do{" "}
          </strong>
          <a
            href="#"
            className="text-blue-500 underline ml-1 hover:text-blue-700"
          >
            UODO
          </a>
        </p>
        <br />
        <button className="bg-orange-500 py-4 text-lg w-full hover:bg-orange-700">
          Zaloguj
        </button>

        <p>
          <strong className="text-gray-500">Nie pamiętasz hasła?</strong>
          <a
            href="#"
            className="text-orange-500 underline ml-1 hover:text-orange-700"
          >
            Odzyskaj hasło
          </a>
        </p>
      </div>
    </form>
  );
}
