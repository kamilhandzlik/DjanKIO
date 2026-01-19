interface Props {
  lastDay: Date;
  firstDayAfter: Date;
}

export default function PSWZResults({ lastDay, firstDayAfter }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-black font-semibold">Wynik Kalkulacji</h2>

      <div className="space-y-2 text-green-500 text-xl">
        <p>
          <strong>Ostateczny termin na odpowiedź na pytanie:</strong>{" "}
          {lastDay.toLocaleDateString()}
        </p>
        <p>
          <strong>Pierwszy dzień po terminie:</strong>{" "}
          {firstDayAfter.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
