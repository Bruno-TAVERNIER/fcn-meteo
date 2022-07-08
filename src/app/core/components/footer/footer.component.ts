import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * Année créée dynamiquement avec la bibliothèque dayjs
   */
  public date = dayjs().format('YYYY');

  constructor() { }

  ngOnInit(): void {
  }

}
