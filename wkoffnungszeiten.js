// Function to get the current day of the week (0 - Sunday, 1 - Monday, etc.)
  function getCurrentDayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    return days[currentDate.getDay()];
  }

  // Function to display the opening and closing times for the current day
  function displayOpeningHours() {
    const openingHours = {
      Sunday: 'von 10:00 bis 17:00 Uhr',
      Monday: 'von 10:00 bis 17:00 Uhr',
      Tuesday: 'von 10:00 bis 17:00 Uhr',
      Wednesday:'von 10:00 bis 17:00 Uhr',
      Thursday: 'von 10:00 bis 17:00 Uhr',
      Friday: 'von 11:00 bis 14:00 Uhr',
      Saturday: 'von 10:00 bis 17:00 Uhr',
    };

    const currentDayOfWeek = getCurrentDayOfWeek();
    const openingHoursContainer1 = document.getElementById('openingHoursContainer1');
    const openingHoursContainer2 = document.getElementById('openingHoursContainer2');

    if (openingHoursContainer1) {
      openingHoursContainer1.textContent = `Geöffnet: ${openingHours[currentDayOfWeek]}`;
    }

    if (openingHoursContainer2) {
      openingHoursContainer2.textContent = `Geöffnet: ${openingHours[currentDayOfWeek]}`;
    }
  }

  // Call the function to display the opening hours when the page loads
  displayOpeningHours();
