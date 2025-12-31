import { addDays, subDays } from "date-fns";

export function calculateTZO(submissionDate: Date, bindingDays: number) {
  const lastDay = subDays(addDays(submissionDate, bindingDays), 1);
  const firstDayAfter = addDays(lastDay, 1);

  return {
    lastDay,
    firstDayAfter,
  };
}
