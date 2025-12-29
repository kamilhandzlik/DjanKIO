"use client";

import { useState } from "react";
import ModeTabs from "./components/ModeTabs";

export type Mode = "TZO" | "TSO" | "SWZ" | "ODWOLANIE";

export default function TerminyPage() {
  const [mode, setMode] = useState<Mode>("TZO");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">Kalkulator terminów Pzp</h1>

      <ModeTabs mode={mode} setMode={setMode} />
    </div>
  );
}
