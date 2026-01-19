interface Props {
  submissionDate: Date;
  bindingDays: number;
}

export default function PSWZUsedData({ submissionDate, bindingDays }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-black">Dane użyte do kalkulacji</h3>

      <p className="text-gray-500">
        <strong>Termin składania ofert:</strong>{" "}
        {submissionDate.toLocaleDateString()}
      </p>

      <p className="text-gray-500">
        <strong>dni ubiegu terminu zadawania pytań:</strong> {bindingDays} dni
      </p>
    </div>
  );
}
