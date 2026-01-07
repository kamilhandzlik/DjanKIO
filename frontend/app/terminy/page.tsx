"use client";

import { useState } from "react";
import ModeTabs from "./components/ModeTabs";
import TZOView from "./components/TZO/TZOView";
import TSOView from "./components/TSO/TSOView";

export type Mode =
  | "TZO"
  | "TSO"
  | "Odwołanie"
  | "Pytania do SWZ"
  | "Odpowiedź na pytania do SWZ";

export default function TerminyPage() {
  const [mode, setMode] = useState<Mode>("TZO");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">Kalkulator terminów Pzp</h1>

      <ModeTabs mode={mode} setMode={setMode} />

      {mode === "TZO" && <TZOView />}
      {mode === "TSO" && <TSOView />}
      {mode === "Odwołanie" && <div>Odwołanie – wkrótce</div>}
      {mode === "Pytania do SWZ" && <div>Pytania do SWZ – wkrótce</div>}
      {mode === "Odpowiedź na pytania do SWZ" && (
        <div>Odpowiedź na pytania do SWZ – wkrótce</div>
      )}
    </div>
  );
}
