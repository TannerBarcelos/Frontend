const drink: {
  color: string;
  carbonated: boolean;
  sugar: number;
} = {
  color: 'white',
  carbonated: true,
  sugar: 40,
};

// This is how you initialize a tuple in Ts
const sprite: [string, boolean, number] = ['white', true, 40];

// It is different from an array as we are not doing varName: type[]

// At this point, we can create many tuples with string, boolean and numbers
// in that exact order to represent a soda drink

/**
 * But what if we wanted to create many sodas? Doing
 * const varName : [string, boolean, number] = [data] and re-writing
 * the tuple types would be so much work.. can we make life easier?
 *
 * Yes! By using type Aliasing!
 */

// Type Aliasing
type Drink = [string, boolean, number];

// Now notice we did not hard-code the tuple type, but we aliased
const cocaCola: Drink = ['red', true, 40];
const pepsi: Drink = ['red', false, 45];
const mtDew: Drink = ['green', true, 80];
