interface Props {
  onClick: () => void;
}

export default function CalculateButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600"
    >
      Oblicz termin
    </button>
  );
}
