// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let userInput = "january";

let checkSeason = (season) => {
  if (typeof season === "string") {
    let text = season.toUpperCase();

    if (text === "SEPTEMBER" || text === "OCTOBER" || text === "NOVEMBER") {
      return `The Season is Autumn.`;
    } else if (
      text === "DECEMBER" ||
      text === "JANUARY" ||
      text === "FEBRUARY"
    ) {
      return `The Season is Winter.`;
    } else if (text === "JUNE" || text === "JULY" || text === "AUGUST") {
      return `The Season is Summer.`;
    } else if (text === "MARCH" || text === "APRIL" || text === "MAY") {
      return `The Season is Spring.`;
    } else {
      return `Enter Valid Month.`;
    }
  } else {
    return `Enter Valid Month.`;
  }
};

let value = checkSeason(userInput);
console.log(value);
