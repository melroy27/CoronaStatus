import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  worldStat: any;
  colls: any[];
  cols: any[];
  countryStat: any;
  first = 0;
  rows = 10;

  constructor(private getService: GetDataService) { }

  ngOnInit() {
    this.getService.getWorldCount().subscribe((res) => {
      this.worldStat = res;
      console.log('WORLD', this.worldStat);
    });

    this.getService.getByCountry().subscribe((res) => {
      this.countryStat = res.countries_stat;
      console.log('COUNTRY', this.countryStat);
    });

    this.colls = [{ field: 'active_cases' }];

    this.cols = [
      { field: 'country_name', header: 'country' },
      { field: 'deaths', header: 'deaths' },
      { field: 'cases', header: 'cases' },
      { field: 'new_cases', header: 'new cases today' },
      { field: 'new_deaths', header: 'new deaths today' },
      { field: 'total_recovered', header: 'recovered' },
      { field: 'total_tests', header: 'total tests' },
    ];

  }
}
