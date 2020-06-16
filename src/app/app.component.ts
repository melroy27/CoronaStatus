import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';
import { WritePropExpr } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'serviceWithHttpService';
  constructor() { }
  ngOnInit() { }
}
