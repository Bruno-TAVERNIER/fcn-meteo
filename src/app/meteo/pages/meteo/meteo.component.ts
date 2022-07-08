import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from '../../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  public ville!: any;

  public current !: any;

  constructor(private router: Router, private ms: MeteoService) { }

  ngOnInit(): void {
    // si ville stockée dans le LS on affiche la météo, sinon redirection config
    if(!localStorage.getItem('ville')){
      this.router.navigate(['config']);
    }
    else {
      let tmp:any = localStorage.getItem('ville');
      this.ville = JSON.parse(tmp);
      this.ms.meteoJour(this.ville).subscribe((data) => {
        //console.log(data);
        let meteo: any = data;
        this.current = meteo.current;
      });
    }
  }

}
