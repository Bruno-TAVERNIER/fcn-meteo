import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from '../../services/meteo.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  // ville recherchée
  public ville: any = "Montpellier";
  // liste des villes de l'api
  public liste!: any;
  // stockage temporaire du ls
  private lieu!: any;

  constructor(private ms: MeteoService, private router: Router) {
    //si ville déjà présente dans le LS on l'injecte dans le formulaire
    if(localStorage.getItem('ville')){
      this.lieu = localStorage.getItem('ville');
      let tmp = JSON.parse(this.lieu);
      this.ville = tmp.nom;
    }
   }

  ngOnInit(): void { }

  public search(ville: any): any {
    this.ms.listeVilles(ville.ville).subscribe((data) => {
      this.liste = data;
    });
  }

  public sauve(ville: any): void {
    localStorage.setItem('ville', JSON.stringify(ville));
    //direction la météo
    this.router.navigate(['meteo']);
  }

  public effacer(): void {
    //supprimer le localStorage
    localStorage.removeItem('ville');
    localStorage.clear(); //tout supprimer
  }
}
