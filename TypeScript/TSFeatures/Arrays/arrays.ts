const carMakers: string[] = ['Ford', 'Chevrolet', 'Toyota'];

// Of course, we know TS will do Type Inference, so we could have
// Initialized this without a type and it would pick it up

// What about this though? Well, this is Any type. Because we just
// initialized it without any data, so TS does not have enough info
// to infer the type.. If we want to initialize it, but ensure a type,
// we can do so
const humans = [];

const humans2: string[] = [];

const myCar = carMakers[carMakers.length - 1];

// Array higher-order methods

// Array.map()
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Array.forEach()
carMakers.forEach((car: string): void => {
  console.log(car.toUpperCase());
});

// Array.filter()
carMakers.filter((car: string): void => {
  if (car.startsWith('C')) {
    console.log('This car must be a chevy?', car);
  }
});
