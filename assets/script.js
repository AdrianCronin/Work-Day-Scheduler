var currentDayEl = $('#currentDay');  
var timeTableEl = $('#timeTable');
var currentMoment = moment().format('HH'); // the current hour

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
                    <textarea class="meetingPlan" placeholder="Add Meeting"></textarea>
                </div>
                <div class="col-1 saveColumn">
                    💾
                </div>
            </div>
        `);
    };
};

renderTable();

function colorRows() {
    // get current hour
    // check current hour against planner hours
    // if they are === add class .currentHour
    // if current hour < planner hour add class .futureHour
    // else add class .pastHour
    // bonus refresh when hour rolls over
}


console.log(currentMoment);
console.log(typeof(currentMoment));
console.log(24 - currentMoment);
