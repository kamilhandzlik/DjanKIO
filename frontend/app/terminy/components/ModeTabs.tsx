import { Mode } from "../page";

interface Props {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const modes: Mode[] = [
  "TZO",
  "TSO",
  "Odwołanie",
  "Pytania do SWZ",
  "Odpowiedź na pytania do SWZ",
];

export default function ModeTabs({ mode, setMode }: Props) {
  return (
    <div className="flex- gap-2 text-black">
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`px-4 py-2 rounded border border-gray-300 ${
            mode === m
              ? "bg-orange-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
