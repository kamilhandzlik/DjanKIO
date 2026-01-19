"use client";

import { useState } from "react";
import DatePicker from "../DatePicker";
import PSWZBindingSelector from "./PSWZBindingSelector";
import { calculatePSWZ } from "../../logic/pswz";
import PSWZResults from "./PSWZResults";
import PSWZUsedData from "./PSWZUsedData";
import CalendarView from "../CalendarView";

export default function PSWZView() {
  const [submissionDate, setSubmissionDate] = useState<Date | null>(null);
  const [bindingDays, setBindingDays] = useState(30);
  const today = new Date();
  const [result, setResult] = useState<{
    lastDay: Date;
    firstDayAfter: Date;
  } | null>(null);

  const handleCalculate = () => {
    if (!submissionDate) return;

    setResult(calculatePSWZ(submissionDate, bindingDays));
  };

  return (
    <div className="space-y-4">
      <DatePicker value={submissionDate} onChange={setSubmissionDate} />

      <PSWZBindingSelector value={bindingDays} onChange={setBindingDays} />

      <button
        onClick={handleCalculate}
        className="bg-orange-500 text-white px-6 py-3 rounded font-semibold"
      >
        Oblicz ostateczny termin na składanie pytań
      </button>

      {result && submissionDate && (
        <>
          <hr />
          <PSWZResults
            lastDay={result.lastDay}
            firstDayAfter={result.firstDayAfter}
          />

          <PSWZUsedData
            submissionDate={submissionDate}
            bindingDays={bindingDays}
          />

          <CalendarView startDate={new Date()} endDate={result.lastDay} />
        </>
      )}
    </div>
  );
}
