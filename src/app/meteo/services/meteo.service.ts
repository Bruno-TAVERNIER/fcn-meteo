import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private geoApi = environment.geoApi;
  private meteoApi = environment.meteoApi;
  private prevApi = environment.prevApi;

  constructor(private http: HttpClient) { }

  public listeVilles(ville: any){
    const params = new HttpParams().set('nom', ville).set('fields', 'centre,departement');
    return this.http.get(this.geoApi, { params });
  }

  /*public listeVillesGeo(lat: number, lon: number) {
    const params = new HttpParams().set('lat', lat).set('lon', lon).set('fields', 'centre,departement');
    return this.http.get(this.geoApi, { params });
  }*/

  public meteoJour(ville: any){
    //récup coordonnées gps de la ville
    let lat = ville.centre.coordinates[1];
    let lng = ville.centre.coordinates[0];
    return this.http.get(this.meteoApi + '&lat=' + lat + '&lon=' + lng);
  }

  public previsions(ville: any) {
    //récup coordonnées gps de la ville
    let lat = ville.centre.coordinates[1];
    let lng = ville.centre.coordinates[0];
    return this.http.get(this.prevApi + '&lat=' + lat + '&lon=' + lng);
  }
}
