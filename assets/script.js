var currentDayEl = $('#currentDay');  

currentDayEl.text(moment().format('dddd, MMMM Do'));

var timeTableEl = $('#timeTable');



// // for loop to generate table rows
// for (var i=0; i<=8; i++) {
//     var hour = i + 9;
//     var ampm = 'am';
//     if (hour === 12) {
//         ampm = 'pm';
//     } else if (hour > 12) {
//         hour = hour - 12;
//         ampm = 'pm';
//     };
//     timeTableEl.append(`
//         <tr>
//         <th scope="row">${hour}${ampm}</th>
//         <td colspan="3">Meeting ${i+1}</td>
//         <td>@</td>
//         </tr>
//     `);
// };

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
            Meeting ${i + 1}
          </div>
          <div class="col-1 helpBorder">
            save button
          </div>
        </div>
    `);
};