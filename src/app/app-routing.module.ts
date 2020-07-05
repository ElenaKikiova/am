import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllApplicationsComponent } from './all-applications/all-applications.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "allApplications",
    pathMatch: "full"
  },
  {
    path: "allApplications",
    component: AllApplicationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
