const today = new Date(); // today is of type Date
console.log('Todays date is ' + today.toLocaleDateString());

// Class Object Type
class Color {
  // Define our instance variable types above the constructor so that we can then use this in the context of the class
  color: String;

  constructor(color: String) {
    this.color = color;
  }
  getColor() {
    console.log(this.color);
  }
}
const color = new Color('red'); // color is of type Color [a class]
color.getColor();
