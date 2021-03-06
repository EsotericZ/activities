module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    return (`${month+1}/${day}/${year+5}`);
  },
};
