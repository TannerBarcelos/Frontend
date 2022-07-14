import faker from 'faker'; // NPM Library to generate random data
import { Mappable } from './Map';
// this class implements the Mappable interface which means that it must contain
// the mappable interface properties to be defined in here but of course, it can then contain more than just those properties
// Look at Interfaces from Java to understand even more / the docs for TS - using implements is used by many projects (it helps us and others understand what is going on)
export class User implements Mappable {
  public name: string;
  public userLocation: {
    lat: number;
    lng: number;
  };
  public instance: string;
  constructor() {
    this.name = faker.name.findName();
    this.userLocation = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.instance = 'User';
  }

  // Returns a lat/lng coordinates instance - source: https://developers.google.com/maps/documentation/javascript/markers
  public getLocation(): google.maps.LatLng {
    const { lat, lng }: { lat: number; lng: number } = this.userLocation;
    const latLng: google.maps.LatLng = new google.maps.LatLng(lat, lng);
    return latLng;
  }

  // Returns user information as an HTML string
  public getInformation(): string {
    const userName = `
      <div>
        <h3>User Name: ${this.name}</h3>
      </div>
    `;
    return userName;
  }

  // returns what type of object this instance represents - in this case, a User
  public getInstanceType(): string {
    return this.instance;
  }
}
