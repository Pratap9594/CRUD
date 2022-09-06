import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  {
    path:'', component:ListemployeeComponent
  },
  {
    path:'create', component:CreateemployeeComponent
  },
  {
    path:'update/:id', component:UpdateemployeeComponent
  },
  {
    path:'view/:id', component:ViewemployeeComponent
  },
  {
    path:'delete/:id', component:DeleteemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
