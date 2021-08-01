export const monthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const monthAbbr = Object.entries(monthNames).reduce((acc, [k, v]) => {
  acc[k] = v.substr(0, 3);
  return acc;
}, {});
