"use client";

import { useState } from "react";
import DatePicker from "../DatePicker";
import TSOBindingSelector from "./TSOBindingSelector";
import TSOResults from "./TSOResults";
import TSOUserData from "./TSOUserData";
import { calculateTSO } from "../../logic/tso";
import CalendarView from "../CalendarView";
import TZOUsedData from "./TSOUserData";

export default function TSOView() {
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
    <div className="space-y-6">
      {/* FORMULARZ */}
      <div className="space-y-4">
        <DatePicker value={submissionDate} onChange={setSubmissionDate} />

        <TSOBindingSelector value={bindingDays} onChange={setBindingDays} />

        <button
          onClick={handleCalculate}
          className="bg-orange-500 text-white px-6 py-3 rounded font-semibold"
        >
          Oblicz upływ TSO
        </button>
      </div>

      {/* Kalendarz  */}
      {result && submissionDate && (
        <>
          <hr />
          <TSOResults
            lastDay={result.lastDay}
            firstDayAfter={result.firstDayAfter}
          />

          <TZOUsedData
            submissionDate={submissionDate}
            bindingDays={bindingDays}
          />

          <CalendarView startDate={submissionDate} endDate={result.lastDay} />
        </>
      )}
    </div>
  );
}
