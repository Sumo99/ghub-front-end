export default hour =>
  (([h, ap]) =>
    +h === 12 ? (ap.includes("A") ? 0 : 12) : ap.includes("P") ? +h + 12 : +h)(
    hour.split(" ")
  );
