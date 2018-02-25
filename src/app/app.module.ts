import { SearchFilterPipe } from './shared/pipe/search-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppStarredComponent } from './app-starred/app-starred.component';
import { AppReposComponent } from './app-repos/app-repos.component';
import { AppHomeComponent } from './app-home/app-home.component';

import { AppService } from './app.service';
import { AppRoutes } from './app.routing';
import { AppHomeResolver } from './app-home/app-home.resolver';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppReposComponent,
    AppStarredComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AppService, AppHomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
