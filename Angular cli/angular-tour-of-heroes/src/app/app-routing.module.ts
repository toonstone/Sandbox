import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// e.g. for a url - localhost:4200/heroes linked to the HeroesComponent
// the router will match that URL to path: 'heroes' and display the HeroesComponent
const routes: Routes = [
  // when app starts is at the root this will redirect if empty path to the dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component : DashboardComponent},
  // :id placeholder for id value - parameterised url
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes' , component: HeroesComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    // forRoot() method supplies the service providers and directives needed for routing,
    // and performs the initial navigation based on the current browser URL.
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
