// El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.

// Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.

// El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.

const year = 2022;
const holidays = ["01/06", "04/01", "12/25", "04/02", "04/05"]; // formato MM/DD

console.log(countHours(year, holidays));

function countHours(year, holidays) {
  const month = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };
  let countHours = 0;
  for (let i = 0; i < holidays.length; i++) {
    const [myMonth, day] = holidays[i].split("/");
    let date = new Date(`${month[myMonth]} ${day}, ${year}`);
    let weekday = date.getDay();

    weekday === 0 || weekday === 6 ? null : (countHours = countHours + 2);
  }
  return countHours;
}
