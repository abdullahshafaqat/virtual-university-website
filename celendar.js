// DOM Elements
const calendarBody = document.getElementById('calendar-body');
const monthViewButton = document.getElementById('month-view');
const weekViewButton = document.getElementById('week-view');
const dayViewButton = document.getElementById('day-view');

// Current Date
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Days of the Week
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Display the initial calendar
renderCalendar(currentMonth, currentYear);

// Function to render the calendar for a specific month and year
function renderCalendar(month, year) {
    calendarBody.innerHTML = ""; // Clear the previous cells

    // Get first day of the month and number of days
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // Calculate the number of rows needed
    let date = 1;
    for (let i = 0; i < 6; i++) { // Creating 6 rows
        let row = document.createElement('tr');

        // Create 7 columns (for each day of the week)
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td');
            let cellText = "";

            if (i === 0 && j < firstDay) {
                // Empty cells before the first day of the month
                cellText = document.createTextNode("");
                cell.classList.add('empty');
            } else if (date > daysInMonth) {
                break; // Stop if we've reached the end of the month
            } else {
                // Fill the cells with the correct date
                cellText = document.createTextNode(date);
                cell.classList.add('date-cell');

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add('today');
                }

                // Add click event for day view
                cell.onclick = () => showDayView(date, daysOfWeek[j]);

                date++;
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

// Function to show the month view (default view)
function showMonthView() {
    renderCalendar(currentMonth, currentYear);
    updateActiveView('month-view');
}

// Function to show the week view
function showWeekView() {
    calendarBody.innerHTML = ""; // Clear the calendar
    let row = document.createElement('tr');

    // Display only the current week
    const firstDayOfWeek = today.getDate() - today.getDay(); // Get the first day of the current week
    for (let i = 0; i < 7; i++) {
        let cell = document.createElement('td');
        let dayDate = firstDayOfWeek + i;
        cell.classList.add('date-cell');

        // Get total days in the current month
        let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
        // Adjust if week spreads into the next month
        if (dayDate > daysInMonth) {
            dayDate -= daysInMonth;
        }

        let cellText = document.createTextNode(dayDate);
        cell.appendChild(cellText);

        cell.onclick = () => showDayView(dayDate, daysOfWeek[i]); // Click event to go to day view

        row.appendChild(cell);
    }
    calendarBody.appendChild(row);
    updateActiveView('week-view');
}

// Function to show the day view
function showDayView(day, dayName) {
    calendarBody.innerHTML = ""; // Clear the calendar
    let row = document.createElement('tr');

    // Create a single cell for the selected day
    let cell = document.createElement('td');
    cell.classList.add('date-cell', 'active-day');
    cell.colSpan = 7; // Span across all columns

    let cellText = document.createTextNode(`${dayName}, ${day} ${getMonthName(currentMonth)} ${currentYear}`);
    cell.appendChild(cellText);

    row.appendChild(cell);
    calendarBody.appendChild(row);

    updateActiveView('day-view');
}

// Helper function to get the month name
function getMonthName(monthIndex) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthIndex];
}

// Function to update active view button
function updateActiveView(activeButtonId) {
    // Reset all view buttons
    monthViewButton.classList.remove('active');
    weekViewButton.classList.remove('active');
    dayViewButton.classList.remove('active');

    // Set the active view button
    document.getElementById(activeButtonId).classList.add('active');
}

// Function to go back (simulate a history back action)
function goBack() {
    alert("Going back to the previous page!");
}
