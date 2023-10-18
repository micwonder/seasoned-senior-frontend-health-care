import { time } from "console";
import { createContext } from "react";

interface TimeEntryContextValue {
  dayOfWeek: string[];
  setDayOfWeek: React.Dispatch<React.SetStateAction<string[]>>;
  timeFrom: string;
  setTimeFrom: React.Dispatch<React.SetStateAction<string>>;
  timeTo: string;
  setTimeTo: React.Dispatch<React.SetStateAction<string>>;
}

const TimeEntryContext = createContext<TimeEntryContextValue>({
  dayOfWeek: [],
  setDayOfWeek: () => {},
  timeFrom: "",
  setTimeFrom: () => {},
  timeTo: "",
  setTimeTo: () => {},
});

export default TimeEntryContext;
