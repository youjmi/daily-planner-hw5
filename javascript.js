

var currentDate = $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var dailyHour = moment().format('H')
console.log(dailyHour)

var saveBtn = $("#saveBtn");



var timeSet = ["8","9","10","11","12","13","14","15","16","17"]

function colorDistribute() { 
    
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
    
    
