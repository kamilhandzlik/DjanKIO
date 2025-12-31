interface Props {
  submissionDate: Date;
  bindingDays: number;
}

export default function TZOUsedData({ submissionDate, bindingDays }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-black">Dane użyte do kalkulacji</h3>

      <p className="text-gray-500">
        <strong>Data składania ofert:</strong>{" "}
        {submissionDate.toLocaleDateString("pl-PL")}
      </p>

      <p className="text-gray-500">
        <strong>Termin związania ofertą:</strong> {bindingDays} dni
      </p>
    </div>
  );
}
