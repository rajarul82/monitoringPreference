import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferenceComponent } from './preference/preference.component';

const routes: Routes = [
  {path:'', component:PreferenceComponent},
  {path:'preference', component:PreferenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
