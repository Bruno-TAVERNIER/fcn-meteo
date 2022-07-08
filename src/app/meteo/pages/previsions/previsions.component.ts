import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from '../../services/meteo.service';

@Component({
  selector: 'app-previsions',
  templateUrl: './previsions.component.html',
  styleUrls: ['./previsions.component.scss']
})
export class PrevisionsComponent implements OnInit {

  public ville!: any;
  public meteo!: any;

  constructor(private ms: MeteoService, private router: Router) { }

  ngOnInit(): void {
    //ville dans le LS? sinon => config
    if(!localStorage.getItem('ville')){
      this.router.navigate(['config']);
    }
    else {
      let tmp: any = localStorage.getItem('ville');
      this.ville = JSON.parse(tmp);
      this.ms.previsions(this.ville).subscribe((data) => {
        this.meteo = data;
        //console.log(this.meteo);
      });
    }
  }

}
