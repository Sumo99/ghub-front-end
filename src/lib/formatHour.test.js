import formatHour from "./formatHour";

it("formatHour formats an integer as an hour string", () => {
  expect(formatHour(0)).toBe("12 AM");
  expect(formatHour(12)).toBe("12 PM");
  expect(formatHour(10)).toBe("10 AM");
  expect(formatHour(23)).toBe("11 PM");
});
