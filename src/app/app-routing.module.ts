import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlFormComponent } from './sl-form/sl-form.component';

const routes: Routes = [
  { path: 'form-demo', component: SlFormComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
