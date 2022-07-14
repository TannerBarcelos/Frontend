// Function syntax [ugly]
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};
logNumber(100);

// This is the annotation - const logNumber: (num: number) => void
// This is the function body
/*
= (num: number) => {
  console.log(num);
}; */

// Better syntax! USE THIS [notive the different styles of doing this]
// This function returns a number
const add = (a: number, b: number): number => {
  // return a + b + 'a'; // <- Notice the error here when uncommented
  return a + b;
};

function subtract(a: number, b: number): number {
  return a - b;
}

const mul = function (a: number, b: number): number {
  return a * b;
};

const resTable: { sum: number; sub: number; mul: number } = {
  sum: add(2, 3),
  sub: subtract(5, 2),
  mul: mul(10, 2),
};

console.table(resTable);

// Function with an object argument
const todaysForecast: { date: Date; weather: string } = {
  date: new Date(),
  weather: '68 degrees, sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// We can format this better though! We can use object destructuring!
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  const outString = `Todays date is ${date.toLocaleDateString()} and the weather is ${weather}`;
  console.log(outString);
};

logWeather(todaysForecast);
