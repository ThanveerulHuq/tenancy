import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDetailsFormComponent } from './core/components/basic-details-form/basic-details-form.component';


const routes: Routes = [{ path: '', component: BasicDetailsFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
