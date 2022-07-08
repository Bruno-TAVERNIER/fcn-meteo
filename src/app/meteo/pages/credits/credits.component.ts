import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  public credits!: any[];

  constructor() {
    this.credits = [
      {nom: 'Angular', url: 'http://angular.io'},
      {nom: 'Bootstrap', url: 'http://getbootstrap.com'},
      {nom: 'NG Bootstrap', url: 'https://ng-bootstrap.github.io/'},
      {nom: 'NG Font Awesome', url: 'https://nmpjs.com/package/@fortawesome/angular-fontwesome'},
      {nom: 'API GEO', url: 'https://geo.api.gouv.fr/'},
      {nom: 'OpenWeatherMap', url: 'https://openweathermap.org/api'},
      {nom: 'JSON Viewer', url: 'http://jsonviewer.stack.hu/'},
      {nom: 'Leaflet', url: 'https://leafletjs.com'}
    ];

   }

  ngOnInit(): void {
  }

}
