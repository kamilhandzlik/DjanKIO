import { addDays, subDays } from "date-fns";

export default function calculateOdwolanie(
  submissionDate: Date,
  bindingDays: number
) {
  const lastDay = subDays(addDays(submissionDate, bindingDays), 0);
  const firstDayAfter = addDays(lastDay, 1);
  return {
    lastDay,
    firstDayAfter,
  };
}
