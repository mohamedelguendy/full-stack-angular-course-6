import { Component } from '@angular/core';

interface Place {
  name: string;
  category: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent {
  places: Place[] = [
    { name: 'La Romantica', category: 'Romantic', location: 'Downtown', description: 'Italian fine dining with candlelight atmosphere.' },
    { name: 'FunZone Arcade', category: 'Fun', location: 'City Mall', description: 'Games, VR, and family fun activities.' },
    { name: 'Skyline Rooftop', category: 'Romantic', location: 'Main Street', description: 'Rooftop bar with city view.' },
    { name: 'Comedy Club', category: 'Fun', location: 'Central Avenue', description: 'Stand-up shows every weekend.' }
  ];
}
