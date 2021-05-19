import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelExampleComponent } from './excel-example/excel-example.component';

const routes: Routes = [
  { path: '', component: ExcelExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
