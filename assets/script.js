var currentDayEl = $('#currentDay');  
var timeTableEl = $('#timeTable');
var currentHour = moment().format('HH'); // the current hour

currentDayEl.text(moment().format('dddd, MMMM Do')); // display day of week and month

// this function builds the html elements that make up the planner
function renderTable() {
    for (var i=0; i<=8; i++) {
        var hour = i + 9; // work day starts at 9am 
        var dataHour = i + 9; // this variable keeps track of the hour in 24h format
        var ampm = 'AM';
        
        if (hour === 12) {
            ampm = 'PM'; // change AM to PM at noon
        } else if (hour > 12) {
            hour -= 12; // reset hour to 1 after noon
            ampm = 'PM'; // change AM to PM in the afternoon
        };
        
        // this template literal creates the rows and columns filling in the hours and AM/PM from the variables above and puts a save icon in the last column
        // it also generates dataset attributes and id's depending on the hour of the day they correspond to
        timeTableEl.append(`
        <div class="row">
        
        <div class="col-1 hourColumn">
        ${hour}${ampm} 
        </div>
        
        <div class="col-10" data-hour="${dataHour}" id="idHour${dataHour}">
        <textarea class="meetingPlan" id="textArea${dataHour}"></textarea>
        </div>
        
        <div class="col-1 saveColumn" data-savebutton="${dataHour}">
        <i class="bi bi-save-fill" data-savebutton="${dataHour}"></i>
        </div>
        
        </div>
        `);
        
        var idHourString = "#idHour" + dataHour; // string with the element Id 
        var idHourEl = $(idHourString); // reference to element to pass as an argument
        var hourValue = idHourEl.data("hour"); // storing element's dataset attribute to pass as an argument
        var textAreaEl = document.getElementById("textArea" + dataHour); // text area element reference
        var textAreaString = localStorage.getItem("textArea" + dataHour); // get saved text out of storage
        
        if (textAreaString !== null) {
            textAreaEl.innerHTML = textAreaString; // injects text if there is some saved
        };
        
        colorRows(hourValue, idHourEl);
    }; // end of for loop
    
};

renderTable(); // any references to HTML elements created by this function but be done after this call
var saveColumnEl = $('.saveColumn'); // save buttons' parent element reference, only works after renderTable() executes

// press save icon to save corresponding text area
saveColumnEl.click(function saveInputs(event) {
    var target = event.target.getAttribute("data-savebutton");
    var x = 'textArea' + target
    var y = document.getElementById(x).value;
    
    localStorage.setItem(x, y); // textarea Id used as key, text is the value
});


// this function colors the background of the text areas by adding css classes
function colorRows(calendarHour, element) {
    if (currentHour == calendarHour) {
        element.addClass('present');
    } else if (currentHour < calendarHour) {
        element.addClass('future');
    } else {
        element.addClass('past');
    };
};

// changes icon to black when hovering, changes back to white when not hovering
saveColumnEl.hover(function(event) {
    event.target.style.color ='#000000'
}, function(event) {
    event.target.style.color ='#ffffff'
});

