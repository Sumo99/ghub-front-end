import parseHour from "./parseHour";

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export default (day, hour) =>
  DAYS_OF_WEEK.findIndex(d => d === day) * 24 + parseHour(hour);
