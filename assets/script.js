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

        // this template literal creates the rows and columns filling in the hours and AM/PM from the variables above
        // it also generates dataset attributes and id's depending on the hour of the day they correspond to
        timeTableEl.append(`
            <div class="row">
                <div class="col-1 hourColumn">
                    ${hour}${ampm} 
                </div>
                <div class="col-10" data-hour="${dataHour}" id="idHour${dataHour}">
                    <textarea class="meetingPlan" placeholder="Add Meeting"></textarea>
                </div>
                <div class="col-1 saveColumn">
                    💾
                </div>
            </div>
        `);

        var idString = "#idHour" + dataHour; // string with the element Id 
        var idHourEl = $(idString); // reference to element to pass as an argument
        var hourValue = idHourEl.data("hour"); // storing element's dataset attribute to pass as an argument

        colorRows(hourValue, idHourEl); 
    };
};

// this function colors the background of the text areas by adding css classes
function colorRows(calendarHour, element) {
    if (currentHour == calendarHour) {
        element.addClass('currentHour');
    } else if (currentHour < calendarHour) {
        element.addClass('futureHour');
    } else {
        element.addClass('pastHour');
    };
};

renderTable();

