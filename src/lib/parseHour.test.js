import parseHour from "./parseHour";

it("parseHour parses an hour string into an integer", () => {
  expect(parseHour("10 AM")).toBe(10);
  expect(parseHour("12 AM")).toBe(0);
  expect(parseHour("12 PM")).toBe(12);
  expect(parseHour("11 PM")).toBe(23);
});
