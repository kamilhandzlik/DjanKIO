interface Props {
  lastDay: Date;
  firstDayAfter: Date;
}

export default function TZOResults({ lastDay, firstDayAfter }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-black font-semibold">Wynik Kalkulacji</h2>

      <div className="space-y-2 text-green-500 text-xl">
        <p>
          <strong>Ostatni dzień TZO:</strong>{" "}
          {lastDay.toLocaleDateString("pl-PL")}
        </p>

        <p>
          <strong>Pierwszy dzień po upływie TZO:</strong>{" "}
          {firstDayAfter.toLocaleDateString("pl-PL")}
        </p>
      </div>
    </div>
  );
}
