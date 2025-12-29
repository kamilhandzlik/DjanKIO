import { subDays } from "date-fns";

export function calculateTZO(submissionDate: Date, daysBefore: number): Date {
  let current = submissionDate;
  let daysLeft = daysBefore;

  while (daysLeft > 0) {
    current = subDays(current, 1);

    const day = current.getDay();
    const isWeekend = day === 0 || day === 6;

    if (!isWeekend) {
      daysLeft--;
    }
  }

  return current;
}
