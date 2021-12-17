import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauxComponent } from './pages/cadeaux/cadeaux.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cadeaux",
    component: CadeauxComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
