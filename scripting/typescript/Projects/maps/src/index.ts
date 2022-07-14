import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();

// Initialize new Map instance and build the Map from Google Maps into the UI
const map = new Map('map');

// Add some markers to the map
map.addMarker(user);
map.addMarker(company);
