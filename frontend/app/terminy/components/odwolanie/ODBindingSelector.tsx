interface Props {
  value: number;
  onChange: (value: number) => void;
}

const presets = [5, 10, 15, 30];

export default function ODBindingSelector({ value, onChange }: Props) {
  return (
    <div className="space-y-2">
      <label className="font-medium text-black">Termin związania ofertą</label>

      <div className="flex gap-2 text-gray-500">
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`px-3 py-1 border rounded ${
              value === p
                ? "border-orange-500 text-orange-600"
                : "hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}

        <span className="text-gray-500 self-center">własne</span>
      </div>

      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border border-gray-300 px-3 py-2 rounded w-32"
      />
    </div>
  );
}
