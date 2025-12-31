"use client";

import { useState } from "react";
import DatePicker from "../DatePicker";
import TZOBindingSelector from "./TZOBindingSelector";
import TZOResults from "./TZOResults";
import TZOUsedData from "./TZOUsedData";
import { calculateTZO } from "../../logic/tzo";

export default function TZOView() {
  const [submissionDate, setSubmissionDate] = useState<Date | null>(null);
  const [bindingDays, setBindingDays] = useState(30);
  const [result, setResult] = useState<{
    lastDay: Date;
    firstDayAfter: Date;
  } | null>(null);

  const handleCalculate = () => {
    if (!submissionDate) return;

    setResult(calculateTZO(submissionDate, bindingDays));
  };

  return (
    <div className="space-y-6">
      {/* FORMULARZ */}
      <div className="space-y-4">
        <DatePicker value={submissionDate} onChange={setSubmissionDate} />

        <TZOBindingSelector value={bindingDays} onChange={setBindingDays} />

        <button
          onClick={handleCalculate}
          className="bg-orange-500 text-white px-6 py-3 rounded font-semibold"
        >
          Oblicz upływ TZO
        </button>
      </div>

      {/* WYNIKI */}
      {result && (
        <>
          <hr />

          <TZOResults
            lastDay={result.lastDay}
            firstDayAfter={result.firstDayAfter}
          />

          <TZOUsedData
            submissionDate={submissionDate}
            bindingDays={bindingDays}
          />
        </>
      )}
    </div>
  );
}
