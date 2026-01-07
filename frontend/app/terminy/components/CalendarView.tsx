import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { pl } from "date-fns/locale";

interface Props {
  startDate: Date;
  endDate: Date;
}

export default function CalendarView({ startDate, endDate }: Props) {
  const monthStart = startOfMonth(startDate);
  const monthEnd = endOfMonth(endDate);

  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-black">Wizualizacja kalendarza</h3>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {["pon", "wt", "śr", "czw", "pt", "sob", "nd"].map((d) => (
          <div key={d} className="font-medium text-gray-500">
            {d}
          </div>
        ))}

        {days.map((day) => {
          const isStart = isSameDay(day, startDate);
          const isInRange = isWithinInterval(day, {
            start: startDate,
            end: endDate,
          });

          return (
            <div
              key={day.toISOString()}
              className={`p-2 rounded text-gray-500
                ${
                  isStart
                    ? "bg-blue-500 text-white font-semibold"
                    : isInRange
                    ? "bg-green-100"
                    : "bg-white"
                }
              `}
            >
              {format(day, "d", { locale: pl })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
