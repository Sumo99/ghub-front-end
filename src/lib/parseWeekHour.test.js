import parseWeekHour from "./parseWeekHour";

it("parseWeekHour parses a day and an hour into an integer", () => {
  expect(parseWeekHour("Sunday", "12 AM")).toBe(0);
  expect(parseWeekHour("Sunday", "10 AM")).toBe(10);
  expect(parseWeekHour("Monday", "10 AM")).toBe(34);
  expect(parseWeekHour("Tuesday", "10 AM")).toBe(58);
  expect(parseWeekHour("Tuesday", "12 PM")).toBe(60);
  expect(parseWeekHour("Tuesday", "12 AM")).toBe(48);
});
