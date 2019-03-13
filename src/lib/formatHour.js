export default n => {
  const h = n === 0 ? 12 : n === 12 ? 12 : n % 12;
  const ap = n < 12 ? "AM" : "PM";
  return `${h} ${ap}`;
};
