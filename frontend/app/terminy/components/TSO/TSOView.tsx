"use client";

import { useState } from "react";
import DatePicker from "../DatePicker";
import TSOBindingSelector from "./TSOBindingSelector";

import { calculateTSO } from "../../logic/tso";
import CalendarView from "../CalendarView";

export default function TSOView() {
  const [submissionDate, setSubmissionDate] = useState<Date | null>(null);
  const [bindingDays, setBindingDays] = useState(30);
  const [result, setResult] = useState<{
    lastDay: Date;
    firstDayAfter: Date;
  } | null>(null);

  return (
    <div className="space-y-6">
      {/* FORMULARZ */}
      <div className="space-y-4">
        <DatePicker value={submissionDate} onChange={setSubmissionDate} />

        <TSOBindingSelector value={bindingDays} onChange={setBindingDays} />

        <button
          //   onClick={}
          className="bg-orange-500 text-white px-6 py-3 rounded font-semibold"
        >
          Oblicz upływ TSO
        </button>
      </div>

      {/* Kalendarz  */}
      {result && submissionDate && (
        <>
          <hr />

          <CalendarView startDate={submissionDate} endDate={result.lastDay} />
        </>
      )}
    </div>
  );
}
