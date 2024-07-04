window.onload = function() {
    // Display current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime.split(' ')[4];
    }
    updateTime();
    setInterval(updateTime, 1000); // Update every second

    // Display current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getUTCDay();
    document.querySelector('[data-testid="currentDay"]').textContent = daysOfWeek[currentDay];
};
