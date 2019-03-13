import formatHour from "./formatHour";
import parseHour from "./parseHour";
import { property, integer } from "jsverify";

describe("parseHour and formatHour", () => {
  property(
    "are isomorphic",
    integer(0, 23),
    num => parseHour(formatHour(num)) === num
  );
});
