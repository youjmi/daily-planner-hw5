

var dailyHour = moment().format('H')
var currentDate = $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



// var hour8 = $("#timeSet8")
// var hour9 = $("#timeSet9")
// var hour10 = $("#timeSet10")
// var hour11 = $("#timeSet11")
// var hour12 = $("#timeSet12")
// var hour13 = $("#timeSet13")
// var hour14 = $("#timeSet14")
// var hour15 = $("#timeSet15")
// var hour16 = $("#timeSet16")
// var hour17 = $("#timeSet17")



setInterval (function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000)


function savePlanner() {
    $("textarea").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id)

        if (schedule !== null) {
            $(this).children("textarea").val(schedule)
        }
    }

    )}
savePlanner()


var saveBtn = $("#saveBtn");

saveBtn.on("click", function () {
    var timeEntry = $(this).siblings("div").text()
    var textEntry = $(this).siblings("textarea").val();

    localStorage.setItem(timeEntry, textEntry);
})



function colorDistribute() {
    $("textarea").each(function () {
        var currentHour = $(this).attr("id")
        console.log(currentHour)

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