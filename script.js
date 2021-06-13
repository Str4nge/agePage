const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculator() {
  let today = new Date();
  let inpDate = new Date(document.getElementById("date").value);
  let days, months, years;
  let birth = {
    date: inpDate.getDate(),
    month: inpDate.getMonth(),
    year: inpDate.getFullYear(),
  };
  let current = {
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
  };

  chkLeapYear(current.year);

  if (
    birth.year > current.year ||
    (birth.month > current.month && birth.year == current.year) ||
    (birth.date > current.date &&
      birth.month == current.month &&
      birth.year == current.year)
  ) {
    alert("Not Born Yet!");
    return;
  }

  years = current.year - birth.year;

  if (current.month >= birth.month) {
    months = current.month - birth.month;
  } else {
    years--;
    months = 12 + current.month - birth.month;
  }

  if (current.date >= birth.date) {
    days = current.date - birth.date;
  } else {
    months--;
    if (months < 0) {
      months = 11;
      years--;
    }
    days = monthDays[months - 1] + current.date - birth.date;
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("months").innerHTML = months;
  document.getElementById("years").innerHTML = years;

  console.log(years, months, days);
}

function chkLeapYear(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    monthDays[1] = 29;
  } else {
    monthDays[1] = 28;
  }
  console.log(year, monthDays[1]);
}
