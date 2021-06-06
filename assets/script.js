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
                    <textarea class="meetingPlan" placeholder=""></textarea>
                </div>
                <div class="col-1 saveColumn">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="white" class="bi bi-save-fill" viewBox="0 0 16 16">
                        <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
                    </svg>

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

// `saveInputs()`
//  trigger on a savebutton press event maybe
// saves current text in the corresponding box to memory

// `saveHover()`
//  trigger when save buttons are hovered
//  change the floppy disk 

var savezColumnEl = $('.saveColumn');