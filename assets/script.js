var currentDayEl = $('#currentDay');  
var timeTableEl = $('#timeTable');
var currentHour = moment().format('HH'); // the current hour

currentDayEl.text(moment().format('dddd, MMMM Do')); // display day of week and month

// column for loop
function renderTable() {
    for (var i=0; i<=8; i++) {
        var hour = i + 9;
        var dataHour = i + 9;
        var ampm = 'AM';
        if (hour === 12) {
            ampm = 'PM';
        } else if (hour > 12) {
            hour -= 12;
            ampm = 'PM';
        };
        // try appending data-attributes 
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
        var idString = "#idHour" + dataHour;
        var idHourEl = $(idString);
        var hourValue = idHourEl.data("hour");
        // console.log(hourValue);
        colorRows(hourValue, idHourEl);
    };
};

renderTable();

function colorRows(calendarHour, element) {
    console.log(calendarHour);
    console.log(element);
    if (currentHour == calendarHour) {
        element.addClass('currentHour');
    } else if (currentHour < calendarHour) {
        element.addClass('futureHour');
    } else {
        element.addClass('pastHour');
    };
};


