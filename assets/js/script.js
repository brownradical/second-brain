$(function () {});

  var today = moment().format("dddd, MMMM Do");
  var hour = moment().format("HA");

  $("#currentDay").text(today);


  /* HOURS OF THE DAY*/
  var planDay = [
    { time: "9AM", action: "" },
    { time: "10AM", action: "" },
    { time: "11AM", action: "" },
    { time: "12PM", action: "" },
    { time: "1PM", action: "" },
    { time: "2PM", action: "" },
    { time: "3PM", action: "" },
    { time: "4PM", action: "" },
    { time: "5PM", action: "" },
  ];


  /* ROW CREATION */
  planDay.forEach(function(timeBlock,index) {

    var timeLabel = timeBlock.time;
    var blockColor = colorRow(timeLabel);
    var row =
      '<div class="time-block" id="' +
      index +
      '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
      timeLabel +
      '</div><textarea class="form-control ' +
      blockColor +
      '">' +
		  timeBlock.event +
		  '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

      $(".container").append(row);
  });


  /* ROW COLORS */
  function colorRow(time) {

    var planHour = moment(hour, "HA");
	  var planEntry = moment(time, "HA");
	  if (planHour.isBefore(planEntry) === true) {
		  return "future";
	  } else if (planHour.isAfter(planEntry) === true) {
		  return "past";
	  } else {
		  return "present";
	  }
  }


  /* SAVING + STORAGE */
  $(".saveBtn").on("click", function() {
      var blockID = parseInt(
        $(this)
          .closest(".time-block")
          .attr("id")
      );
      var userEntry = $.trim(
        $(this)
          .parent()
          .siblings("textarea")
          .val()
      );

      planDay[blockID].event = userEntry;
      
      localStorage.setItem("Day", JSON.stringify(planDay));
  });

    var workEvents = JSON.parse(localStorage.getItem("Day"));
    if (workEvents) {
      planDay = workEvents;
   }
