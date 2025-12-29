interface Props {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

export default function DatePicker({ value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1 text-black">
      <label className="font-medium">Termin składania ofert</label>
      <input
        type="date"
        value={value ? value.toISOString().split("T")[0] : ""}
        onChange={(e) =>
          onChange(e.target.value ? new Date(e.target.value) : null)
        }
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
}
