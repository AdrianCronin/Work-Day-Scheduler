var currentDayEl = $('#currentDay');  

currentDayEl.text(moment().format('dddd, MMMM Do'));

var timeTableEl = $('#timeTable');

for (var i=0; i<=8; i++) {
    var hour = i + 9;
    var ampm = 'am';
    if (hour === 12) {
        ampm = 'pm';
    } else if (hour > 12) {
        hour = hour - 12;
        ampm = 'pm';
    };
    timeTableEl.append(`
        <tr>
        <th scope="row">${hour}${ampm}</th>
        <td colspan="3">Meeting ${i+1}</td>
        <td>@</td>
        </tr>
    `);
};

