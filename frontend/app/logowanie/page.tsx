"use client";

import { useState } from "react";
import ModeTabs from "./components/ModeTabs";
import LoginView from "./components/LoginView";
import Wokanda from "../components/wokanda/wokanda";

export type Mode = "Logowanie" | "Rejestracja";

export default function LogowanieView() {
  const [mode, setMode] = useState<Mode>("Logowanie");

  return (
    <div className="py-10 px-10">
      <div className="py-4 px-5 border border-gray-300 rounded shadow-md ">
        <ModeTabs mode={mode} setMode={setMode} />

        {mode === "Logowanie" && <LoginView />}
        {mode === "Rejestracja" && (
          <div className="text-black">Rejestracja</div>
        )}
      </div>
      <Wokanda />
    </div>
  );
}
