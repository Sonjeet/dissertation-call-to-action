var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var today = new Date();
var formattedDate = monthNames[today.getMonth()] + ", " + today.getFullYear();
var renderedText = "Last updated: " + formattedDate;
var el = document.getElementById("rendering-scene");
el.innerHTML = renderedText;