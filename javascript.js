

var dailyHour = moment().format('H')

var saveBtn = $("#saveBtn");

// var am8 = $("#timeSet8")
// var am9 = $("#timeSet9")
// var am10 = $("#timeSet10")
// var am11 = $("#timeSet11")
// var pm12 = $("#timeSet12")
// var pm13 = $("#timeSet13")
// var pm14 = $("#timeSet14")
// var pm15 = $("#timeSet15")
// var pm16 = $("#timeSet16")
// var pm17 = $("#timeSet17")
var timeSet = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
colorDistribute();

function colorDistribute() { 
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    for (var i = 0; i < timeSet.length; i++)
         
         if (timeSet [i] > dailyHour) {
             $("<textarea>").addClass("future")
         }
         else if (timeSet [i] = dailyHour) {
             $("<textarea>").addClass("present")
         }
         else {
             $("<textarea>").addClass("past")
         }
 
     }


function setPlanner() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $("#calendar-row").each(function () { 
        var calRow =$(this).attr("calendar-row")
        localStorage.getItem(calRow)

         if (calRowSave !==null){
             $(this).children("#text-entry1").val(calRowSave)
        }
     })
}



saveBtn.on("click",function() {
    var time = $(this).parent().attr("calendar-row")
    var textEntry =$(this).siblings("#text-entry1").val();

    localStorage.setItem(time,textEntry);
})


