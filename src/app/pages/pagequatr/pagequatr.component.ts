import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-pagequatr',
  templateUrl: './pagequatr.component.html',
  styleUrls: ['./pagequatr.component.css']
})
export class PagequatrComponent implements OnInit {


  id: string;

  constructor(private activeroute: ActivatedRoute) { 
      this.id = this.activeroute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
