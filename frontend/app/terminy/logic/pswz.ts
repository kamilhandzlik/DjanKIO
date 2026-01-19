import { subDays, addDays } from "date-fns";

export function calculatePSWZ(submissionDate: Date, bindingDays: number) {
  const lastDay = subDays(submissionDate, bindingDays);
  const firstDayAfter = addDays(lastDay, 1);

  return {
    lastDay,
    firstDayAfter,
  };
}
