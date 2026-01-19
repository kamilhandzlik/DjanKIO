interface Props {
  submissionDate: Date;
  bindingDays: number;
}

export default function OSWZUsedData({ submissionDate, bindingDays }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-black">Dane użyte do kalkulacji</h3>

      <p className="text-gray-500">
        <strong>Termin wpłynięcia odpowiedzi:</strong>{" "}
        {submissionDate.toLocaleDateString()}
      </p>

      <p className="text-gray-500">
        <strong>dozwolony termin udzielania odpowiedzi:</strong> {bindingDays}{" "}
        dni
      </p>
    </div>
  );
}
