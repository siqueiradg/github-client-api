import { Repository } from './../shared/interface/repository';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-repos',
  templateUrl: 'app-repos.component.html'
})

export class AppReposComponent implements OnInit {

  listRepository: Repository[];
  filterSearch: String;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getRepos().subscribe(
      (data: Repository[]) => {
        this.listRepository = data;
      }
    );
  }
}
