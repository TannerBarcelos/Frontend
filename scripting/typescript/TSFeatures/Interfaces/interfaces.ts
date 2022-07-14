const oldCivic: { name: string; year: number; broken: boolean } = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// Notice how the type annotation is super long and hard to read. Can we improve it?
// Yes, let's destructure
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Name: ${vehicle.year}`);
//   console.log(`Name: ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

// Destructuring the type annotation
// const printVehicle = ({
//   name,
//   year,
//   broken,
// }: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${name}`);
//   console.log(`Name: ${year}`);
//   console.log(`Name: ${broken}`);
// };
// printVehicle(oldCivic);

/**
 * Still, notice this is hard to read. What if we can simplify it even more
 * using some definition of a car and we can pass in many cars while keeping
 * type safety but using half the code? We can! We can use an interface
 */

// This is the syntax for an interface
interface Car {
  name: string;
  year: number;
  broken: boolean;
}

// const printVehicle = (vehicle: Car): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Name: ${vehicle.year}`);
//   console.log(`Name: ${vehicle.broken}`);
// };
// printVehicle(oldCivic);

// With destructuring
const printVehicle = ({ name, year, broken }: Car): void => {
  console.log(`Name: ${name}`);
  console.log(`Name: ${year}`);
  console.log(`Name: ${broken}`);
};
printVehicle(oldCivic);

/**
 * Wow, so much smaller and cleaner! It is also way more explicit
 */

// interface Vehicle {
//   summary(): object;
// }

// const Siverado = {
//   name: 'Chevy Silverado',
//   driveTrain: '4wd',
//   summary(): object {
//     return this;
//   },
// };

// const printVehicle2 = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };
// printVehicle2(Siverado);

// This is great but it is not extensible nor clean code - we want the code
// to be generic and extensible. printVehicle could be refacorted to allow an itnerface
// and the function print summaries on things beyond just vehicles! See below

interface Reportable {
  summary(): string;
}

const Siverado = {
  name: 'Chevy Silverado',
  driveTrain: '4wd',
  summary(): string {
    const msg = `Car Type: ${this.name} ${
      this.driveTrain === '4wd' ? 'is' : 'is not'
    } 4 wheel drive`;
    return msg;
  },
};

const BreakfastSandwich = {
  bread: 'Wheat',
  shouldSubsituteForEggwhites: true,
  summary(): string {
    const msg = `Bread Type: ${this.bread} and ${
      this.shouldSubsituteForEggwhites
        ? 'should substitute'
        : 'shoul not substitute'
    } for egg whites`;
    return msg;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(Siverado);
printSummary(BreakfastSandwich);
