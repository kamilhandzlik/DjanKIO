interface Props {
  lastDay: Date;
  firstDayAfter: Date;
}

export default function TSOResults({ lastDay, firstDayAfter }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-black font-semibold">Wynik Kalkulacji</h2>

      <div className="space-y-2 text-green-500 text-xl">
        <p>
          <strong>Termin skadania ofert upływa w dniu</strong>{" "}
          {lastDay.toLocaleDateString("pl-PL")}
        </p>
      </div>
    </div>
  );
}
