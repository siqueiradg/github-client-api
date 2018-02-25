import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AppService } from './../app.service';
import { Profile } from '../shared/interface/profile';

@Injectable()
export class AppHomeResolver implements Resolve<Profile> {

    constructor(private service: AppService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            return this.service.getProfile();
          }
}
