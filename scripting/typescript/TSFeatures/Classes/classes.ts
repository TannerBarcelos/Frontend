// The class itself
class Vehicle {
  protected isElectric: boolean;
  constructor(isElectrinc: boolean) {
    this.isElectric = isElectrinc;
  }

  public honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  constructor(isElectric: boolean) {
    super(isElectric);
  }

  private drive(): void {
    if (this.isElectric) {
      console.log('No sound - I am electric!');
    } else {
      console.log('Vroom Vroom');
    }
  }

  public startDriving(): void {
    this.drive();
  }
}

// Instance of class - tesla now has access to all Vehicle methods and Car methods
const isElectric: boolean = true;
const tesla = new Car(isElectric);
tesla.startDriving();
tesla.honk();
