import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelExampleComponent } from './components/excel-example/excel-example.component';
import { LoginComponent } from './components/login/login.component'
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'excel', component: ExcelExampleComponent },
  { path: 'album', component: AlbumComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
