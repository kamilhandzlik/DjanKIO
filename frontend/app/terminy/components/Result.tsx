interface Props {
  date: Date;
}

export default function Result({ date }: Props) {
  return (
    <div className="border rounded p-4 bg-green-50">
      <h2 className="font-semibold">Wynik Kalkulacji</h2>
      <p className="text-green-700 text-lg">
        {date.toLocaleDateString("pl-PL")}
      </p>
    </div>
  );
}
