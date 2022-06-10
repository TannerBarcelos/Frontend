import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  public companyName: string;
  public companyCatchPhrase: string;
  public companyLocation: {
    lat: number;
    lng: number;
  };
  public instance: string;
  constructor() {
    this.companyName = faker.company.companyName();
    this.companyCatchPhrase = faker.company.catchPhrase();
    this.companyLocation = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.instance = 'Company';
  }

  // Returns a lat/lng coordinates instance - source: https://developers.google.com/maps/documentation/javascript/markers
  public getLocation(): google.maps.LatLng {
    const { lat, lng }: { lat: number; lng: number } = this.companyLocation;
    const latLng: google.maps.LatLng = new google.maps.LatLng(lat, lng);
    return latLng;
  }

  // Returns company information as an HTML string
  public getInformation(): string {
    const userCompanyName = `Company Name: ${this.companyName}`;
    const userCompanyCatchphrase = `Company Catchphrase: ${this.companyCatchPhrase}`;
    const returnString = `
      <div>
        <h3>${userCompanyName}</h3>
        <h5>${userCompanyCatchphrase}</h5>
      </div>
    `;
    return returnString;
  }

  // returns what type of object this instance represents - in this case, a User
  public getInstanceType(): string {
    return this.instance;
  }
}
