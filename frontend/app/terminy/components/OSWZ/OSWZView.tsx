"use client";

import { useState } from "react";
import DatePicker from "../DatePicker";
import OSWZBindingSelector from "./OSWZBindingSelector";
import { calculateTSO } from "../../logic/tso";
import OSWZResults from "./OSWZResults";
import OSWZUsedData from "./OSWZUsedData";
import CalendarView from "../CalendarView";

export default function OSWZView() {
  const [submissionDate, setSubmissionDate] = useState<Date | null>(null);
  const [bindingDays, setBindingDays] = useState(30);
  const [result, setResult] = useState<{
    lastDay: Date;
    firstDayAfter: Date;
  } | null>(null);

  const handleCalculate = () => {
    if (!submissionDate) return;

    setResult(calculateTSO(submissionDate, bindingDays));
  };

  return (
    <div className="space-y-4">
      <DatePicker value={submissionDate} onChange={setSubmissionDate} />

      <OSWZBindingSelector value={bindingDays} onChange={setBindingDays} />

      <button
        onClick={handleCalculate}
        className="bg-orange-500 text-white px-6 py-3 rounded font-semibold"
      >
        Oblicz ostateczny termin na składanie pytań
      </button>

      {result && submissionDate && (
        <>
          <hr />
          <OSWZResults
            lastDay={result.lastDay}
            firstDayAfter={result.firstDayAfter}
          />

          <OSWZUsedData
            submissionDate={submissionDate}
            bindingDays={bindingDays}
          />

          <CalendarView startDate={submissionDate} endDate={result.lastDay} />
        </>
      )}
    </div>
  );
}
