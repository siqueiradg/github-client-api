import { Starred } from './shared/interface/starred';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Profile } from './shared/interface/profile';
import { Repository } from './shared/interface/repository';

@Injectable()
export class AppService {

  private apiUrl = 'https://api.github.com/users/rodgerpaulo';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>( this.apiUrl );
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>( this.apiUrl + '/repos' );
  }

  getStarred(): Observable<Starred[]> {
    return this.http.get<Starred[]>( this.apiUrl + '/starred' );
  }

  // Hack
  getStarredTotal(): Observable<Starred[]> {
    return this.http.get<Starred[]>( this.apiUrl + '/starred?page=1&per_page=1000' );
  }
}
