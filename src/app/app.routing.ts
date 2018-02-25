import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component';
import { AppHomeResolver } from './app-home/app-home.resolver';

export const AppRoutes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
    path: 'home',
    resolve: [AppHomeResolver],
    component: AppHomeComponent
  }
]
