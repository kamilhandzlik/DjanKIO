"use client";

import { useState } from "react";
import ModeTabs from "./components/ModeTabs";
import DatePicker from "./components/DatePicker";
import CalculateButton from "./components/CalculateButton";
import Result from "./components/Result";
import { calculateTZO } from "./logic/tzo";

export type Mode = "TZO" | "TSO" | "SWZ" | "ODWOLANIE";

export default function TerminyPage() {
  const [mode, setMode] = useState<Mode>("TZO");
  const [date, setDate] = useState<Date | null>(null);
  const [result, setResult] = useState<Date | null>(null);

  const handleCalculate = () => {
    if (!date) return;

    if (mode === "TZO") {
      const calculated = calculateTZO(date, 0);

      setResult(calculated);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">Kalkulator terminów Pzp</h1>

      <ModeTabs mode={mode} setMode={setMode} />

      <DatePicker value={date} onChange={setDate} />

      <CalculateButton onClick={handleCalculate} />

      {result && <Result date={result} />}
    </div>
  );
}
