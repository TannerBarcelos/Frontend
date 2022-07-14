// This interface defines what can be mappable - so any object passed in that we want to map
// User, Company, and whatever else later as we scale the code, must contain
// getLocation() and getInformation() as methods to describe those objects. This allows our code
// to be scalable but also super flexible and clean
export interface Mappable {
  getLocation(): google.maps.LatLng;
  getInformation(): string;
  getInstanceType(): string;
}

/**
 * Docs for Google Maps - https://developers.google.com/maps/documentation/javascript/overview
 */
export class Map {
  private googleMap: google.maps.Map; // instance of a google map api object to work with to initialize the map (in buildMap()) and attatch markers
  private elementId: string;

  constructor(elementId: string) {
    this.elementId = elementId; // Set the id of the element to attach this map to in HTML
    this.findUsersCurrentLocation();
    this.buildMap(); // Build the map
  }

  private buildMap(): void {
    // Create a new Google Map API instance - see docs
    this.googleMap = new google.maps.Map(
      document.getElementById(this.elementId) as HTMLElement,
      {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0,
        },
      },
    );
  }

  // Get users current location to also display a marker on the Map
  public findUsersCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const markerOpts: google.maps.MarkerOptions = {
            map: this.googleMap,
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            title: 'Current Location',
          };
          const marker: google.maps.Marker = new google.maps.Marker(markerOpts);
          marker.addListener('click', (): void => {
            const infoWindow: google.maps.InfoWindow =
              new google.maps.InfoWindow({
                content: '<h3>Your current location</h3>',
              });
            infoWindow.open(this.googleMap, marker);
          });
        },
      );
    }
  }

  // Add a new marker for a Mappable satisfied interface object / instance that implements that interface - see docs for Marker() and InforWindow() from Google Maps API
  addMarker(mappable: Mappable): void {
    const markerOpts: google.maps.MarkerOptions = {
      map: this.googleMap, // the map to attach the marker to - see docs (in our case, it is this map instance)
      position: mappable.getLocation(),
      title: mappable.getInstanceType(),
    };

    const marker: google.maps.Marker = new google.maps.Marker(markerOpts); // can pass options as an object literal

    marker.addListener('click', (): void => {
      const infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow({
        content: mappable.getInformation(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
