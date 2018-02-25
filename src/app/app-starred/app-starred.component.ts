import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service';
import { Starred } from './../shared/interface/starred';

@Component({
  selector: 'app-starred',
  templateUrl: 'app-starred.component.html'
})

export class AppStarredComponent implements OnInit {

  listStarred: Starred[];
  filterSearch: String;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getStarred().subscribe(
      (data: Starred[]) => {
        this.listStarred = data;
      }
    );
  }
}
