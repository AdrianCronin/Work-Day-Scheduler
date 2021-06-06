var currentDayEl = $('#currentDay');  

currentDayEl.text(moment().format('dddd, MMMM Do'));

var timeTableEl = $('#timeTable');

// // column for loop
function renderTable() {
    for (var i=0; i<=8; i++) {
        var hour = i + 9;
        var ampm = 'am';
        if (hour === 12) {
            ampm = 'pm';
        } else if (hour > 12) {
            hour -= 12;
            ampm = 'pm';
        };
        // try appending data-attributes 
        timeTableEl.append(`
            <div class="row">
            <div class="col-1 helpBorder">
                ${hour}${ampm}
            </div>
            <div class="col-10 helpBorder">
                <textarea class="meetingPlan" placeholder="Add Meeting"></textarea>
            </div>
            <div class="col-1 helpBorder">
                save button
            </div>
            </div>
        `);
    };
};

renderTable();