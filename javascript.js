

var dailyHour = moment().format('H')
var currentDate = $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Set Timer to go live. //
setInterval (function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000)

//Local Storage when saving //
function savePlanner() {
    $("textarea").each(function () {
        var id = $(this).attr("#timeSet");
        var schedule = localStorage.getItem(id)

        if (schedule !== null) {
            $(this).siblings("textarea").val(schedule)
        }
    }

    )}
savePlanner()


var saveBtn = $(".saveBtn");
//on click function to save//
saveBtn.on("click", function () {
    var timeEntry = $(this).siblings("div").text()
    var textEntry = $(this).siblings("textarea").val();

    localStorage.setItem(timeEntry, textEntry);
})


//Disperse color to match with what is present, future, and past//
function colorDistribute() {
    $("textarea").each(function () {
        var currentHour = parseInt($(this).attr("data-hour"))
        console.log(currentHour)
        console.log(dailyHour)

        if (currentHour > dailyHour) {
            $(this).addClass("future")
        }
        else if (currentHour == dailyHour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("past")
        }
    }
    )}
colorDistribute()