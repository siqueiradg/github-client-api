import { Starred } from './../shared/interface/starred';
import { Repository } from './../shared/interface/repository';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Profile } from '../shared/interface/profile';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'app-home.component.html'
})

export class AppHomeComponent implements OnInit {

  private subs: Subscription;
  profile: Profile;
  stars: number;

  constructor(
    private service: AppService,
    private router: Router,
    private route: ActivatedRoute,) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): void {
    this.subs = this.route.data.subscribe(
      (data: Profile) => {
        this.profile = data[0];
        this.getStarredTotal();
      },
      (error: any) => {
        alert(error);
      }
    );
  }

  getStarredTotal(): void {
    this.service.getStarredTotal().subscribe(
      (data: Starred[]) => {
        this.stars = data.length;
      }
    );
  }
}
