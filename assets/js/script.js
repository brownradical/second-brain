$(function () {});

  var today = moment().format("dddd, MMMM Do");
  var hour = moment().format("HA");

  $("#currentDay").text(today);

  var planDay = [
    { time: "9AM", action: "" },
    { time: "10AM", action: "" },
    { time: "11AM", action: "" },
    { time: "12PM", action: "" },
    { time: "1PM", action: "" },
    { time: "2PM", action: "" },
    { time: "3PM", action: "" },
    { time: "4PM", action: "" },
    { time: "5PMM", action: "" },
  ];

