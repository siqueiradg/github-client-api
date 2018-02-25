import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppStarredComponent } from './app-starred/app-starred.component';
import { AppReposComponent } from './app-repos/app-repos.component';
import { AppHomeComponent } from './app-home/app-home.component';

import { AppService } from './app.service';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppReposComponent,
    AppStarredComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
