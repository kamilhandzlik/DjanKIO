"use-client";

import { useState } from "react";
import DatePicker from "../DatePicker";
import ODBindingSelector from "./ODBindingSelector";
import ODResults from "./ODResults";
import ODUsedData from "./ODUsedData";
import calculateOD from "../../logic/odwolanie";
import CalendarView from "../CalendarView";

export default function ODView() {
  const [submissionDate, setSubmissionDate] = useState<Date | null>(null);
  const [bindingDays, setBindingDays] = useState(30);
  const [result, setResult] = useState<{
    lastDay: Date;
    firstDayAfter: Date;
  } | null>(null);

  const handleCalculate = () => {
    if (!submissionDate) return;

    setResult(calculateOD(submissionDate, bindingDays));
  };

  return (
    <div className="space-y-6">
      {/* FORMULARZ */}
      <div className="space-y-4">
        <DatePicker value={submissionDate} onChange={setSubmissionDate} />

        <ODBindingSelector value={bindingDays} onChange={setBindingDays} />

        <button
          onClick={handleCalculate}
          className="bg-orange-500 text-white px-6 py-3 rounded font-semibold"
        >
          Oblicz upływ TZO
        </button>
      </div>

      {/* Kalendarz  */}
      {result && submissionDate && (
        <>
          <hr />

          <ODResults
            lastDay={result.lastDay}
            firstDayAfter={result.firstDayAfter}
          />

          <ODUsedData
            submissionDate={submissionDate}
            bindingDays={bindingDays}
          />

          <CalendarView startDate={submissionDate} endDate={result.lastDay} />
        </>
      )}
    </div>
  );
}
