var currentDayEl = $('#currentDay');  
var timeTableEl = $('#timeTable');

currentDayEl.text(moment().format('dddd, MMMM Do')); // display day of week and month

// column for loop
function renderTable() {
    for (var i=0; i<=8; i++) {
        var hour = i + 9;
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
                <div class="col-10 ">
                    <textarea class="meetingPlan pastHour" placeholder="Add Meeting"></textarea>
                </div>
                <div class="col-1 saveColumn">
                    💾
                </div>
            </div>
        `);
    };
};

renderTable();