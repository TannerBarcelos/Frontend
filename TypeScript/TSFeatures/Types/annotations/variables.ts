/**
 * Syntax is simple:
 * [let, const, var] varName: type = value;
 */
let apples: number = 5;
let speed: string = 'fast';

// try re-assigning speed to another type
// speed = 10;
/*
 * Note the error when uncommenting above:
 * Type 'number' is not assignable to type 'string'
 */

let isTrue: boolean = false;
let und: undefined = undefined;
let n: null = null;

// Object type annotation /* Object Literals */
let now: Date = new Date();
let point: { x: number; y: number } = {
  x: 10,
  y: 2.5,
};

/* Array type annotations*/

let colors: string[] = ['red', 'blue'];

let nums: number[] = [1, 2, 3, 4];

let bools: boolean[] = [true, false, true, true];

interface Person {
  name: string;
  age: number;
  _id: number;
}

const p1: Person = {
  name: 'Tanner',
  age: 25,
  _id: Math.random() * 1000,
};

const p2: Person = {
  name: 'Chad',
  age: 26,
  _id: Math.random() * 1000,
};

let people: Person[] = [p1, p2];

/* Class type annotations */
class Car {}

const car: Car = new Car();

// Any Type - not the greatest thing to use
const json = '{"x":10, "y":20}';
const coords = JSON.parse(json); // hover over coords and notice that its type is 'any'
// console.log(coords);

// the link below are my notes for how this works and why this above code is bad
// craftdocs://open?blockId=E2113684-1F97-4B5C-83B5-50F3EFF3560C&spaceId=23a94566-d418-41a0-9075-ac543852aabd

// so what is the fix? ANNOTATE!
const json2 = '{"x":10, "y":20}';
const coords2: { x: number; y: number } = JSON.parse(json); // hover over coords and notice that its type is 'any'
// console.log(coords2);

// now coords2 contains the type and not any

// Advanced object annotations and destructuring
const Profile: {
  profileName: string;
  age: number;
  address: {
    city: string;
    zip: number;
    address: string;
    unitNo: null | number; // a profile could have a user with an apartment or not. Because of this, we allow null or a number to be here
  };
} = {
  profileName: 'Tanner',
  age: 25,
  address: {
    city: 'Milpitas',
    zip: 95035,
    address: '765 Montague Expressway',
    unitNo: 227,
  },
};

// Advanced function with object destructuring from annotation
const logProfile = ({
  profileName,
  age,
  address: { city, zip, address, unitNo },
}: {
  profileName: string;
  age: number;
  address: {
    city: string;
    zip: number;
    address: string;
    unitNo: null | number;
  };
}): void => {
  console.log(profileName);
  console.log(age);
  console.log(city);
  console.log(zip);
  console.log(address);
  console.log(unitNo);
};

logProfile(Profile);

// Object destructuring
const { profileName, age }: { profileName: string; age: number } = Profile;
console.log(profileName, age);
