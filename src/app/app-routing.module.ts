import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
/**
 *This tells the router to match that URL to path: 'heroes'
  and display the HeroesComponent when the URL is something
  like localhost:4200/heroes.
 */
const routes: Routes = [
    { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component : DashboardComponent },
    { path: 'heroes', component : HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent}// colon (:) in the path indicates that :id is a placeholder for a specific hero id.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
