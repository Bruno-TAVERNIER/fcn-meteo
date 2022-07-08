import { Component, AfterViewInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  public map: any;
  public map2: any;

  constructor() { }

  /* afterViewInit => après l'affichage du template */
  public ngAfterViewInit(): void {
    this.loadMap();
    this.loadMap2();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if(navigator.geolocation) {
        let options = {
          maximumAge: 0,
          timeout: 5000,
          enableHighAccuracy: true
        };
        //getCurrentPosition(fct ok, fct err, options)
        navigator.geolocation.getCurrentPosition((position: any) => {
          //précision
          //console.log(position.coords.accuracy);
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          //l'observer à terminé de pusher des données
          observer.complete();
        }, (error) => {console.log(error)}, options);
      }
      else {
        observer.error();
      }
    });
  }

    private loadMap(): void {
      //création de la carte (lat: 0, lon: 0, zoom: 1)
      this.map = L.map('map').setView([0, 0], 1);
      L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        //il est toujours bien de laisser le lien vers la source des données
        attribution: 'données &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> '
                    +'ODbL - rendu <a href="http://openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
      }).addTo(this.map);
      // déplacement de la carte jusqu'aux bonnes coordonnées
      this.getCurrentPosition().subscribe((position: any) => {
        this.map.flyTo([position.latitude, position.longitude], 15);
        //création d'une icone pour l'affichage
        const icon = L.icon({
          iconUrl: 'assets/images/marker-icon.png',
          shadowUrl: 'assets/images/marker-shadow.png',
          popupAnchor: [13, 0]
        });
        //ajout de l'icone à la carte
        const marker = L.marker([position.latitude, position.longitude], {icon})
                        .bindPopup('Angular 14 is very good!')
                        .addTo(this.map);

      });
    }

    public loadMap2(): void {
      let tmp: any = localStorage.getItem('ville');
      let ville = JSON.parse(tmp);
      this.map2 = L.map('map2').setView([ville.centre.coordinates[1], ville.centre.coordinates[0]], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        //il est toujours bien de laisser le lien vers la source des données
        attribution: 'données &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> '
                    +'ODbL - rendu <a href="http://openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
      }).addTo(this.map2);
      const icon = L.icon({
        iconUrl: 'assets/images/marker-icon.png',
        shadowUrl: 'assets/images/marker-shadow.png',
        popupAnchor: [13, 0]
      });

        //ajout de l'icone à la carte
        const marker = L.marker([ville.centre.coordinates[1], ville.centre.coordinates[0]], {icon})
                        .bindPopup('Angular 14 is very good!')
                        .addTo(this.map2);

    }
}
