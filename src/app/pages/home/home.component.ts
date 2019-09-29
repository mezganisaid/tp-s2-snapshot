import { Component, OnInit } from '@angular/core';
import { GlobalesService } from '../../services/servglobales/globales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allInfo: any[];
  cnt: number = 0;


  constructor( private gbl: GlobalesService) { 
      this.allInfo = gbl.allInfo.reverse();
  }

  ngOnInit() {
  }

}
