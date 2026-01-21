"use-client";

import { useState } from "react";

export default function RegisterView() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
    if (!form.username) newErrors.username = "Nazwa użytkownika jest wymagana";
    if (form.password.length < 6)
      newErrors.password = "Hasło musi mieć minimum 6 znaków";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Hasła nie są takie same";
    if (!accepted) newErrors.terms = "Musisz zaakceptować regulamin";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Konto zostało pomyślnie utworzone!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      {/* EMAIL */}
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

      {/* USERNAME */}
      <div>
        <h3 className="font-semibold text-xl text-black">Nazwa użytkownika</h3>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Wpisz nazwę użytkownika"
          className={`w-full mt-2 p-2 border rounded text-gray-500 ${
            errors.username ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.username && (
          <p className="text-red-600 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      {/* PASSWORD */}
      <div>
        <h3 className="font-semibold text-xl text-black">Hasło</h3>
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

      {/* CONFIRM PASSWORD */}
      <div>
        <h3 className="font-semibold text-xl text-black">Powtórz hasło</h3>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="powtórz hasło"
          className={`w-full mt-2 p-2 border rounded text-gray-500 ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* CHECKBOX */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <span>
          <strong className="text-black">Akceptuję </strong>
          <a
            className="text-orange-500 underline hover:text-orange-700"
            href="#"
          >
            regulamin
          </a>
        </span>
      </div>
      {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}

      {/* SUCCESS MESSAGE */}
      {success && (
        <p className="text-green-600 font-semibold text-lg">{success}</p>
      )}

      <button
        type="submit"
        className="bg-orange-500 py-4 text-lg w-full hover:bg-orange-700 text-white"
      >
        Zarejestruj
      </button>
    </form>
  );
}
