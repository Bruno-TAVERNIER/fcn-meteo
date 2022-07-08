import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl-meteo',
  templateUrl: './tpl-meteo.component.html',
  styleUrls: ['./tpl-meteo.component.scss']
})
export class TplMeteoComponent implements OnInit {

  @Input() meteo!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
