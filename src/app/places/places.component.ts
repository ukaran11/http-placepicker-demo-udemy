import { Component, input, output } from '@angular/core';

import { Place } from './place.model';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})
export class PlacesComponent {
  places = input.required<Place[]>();
  selectPlace = output<Place>();

  onSelectPlace(place: Place) {
    console.log('emitting', place);
    this.selectPlace.emit(place);
  }
}
