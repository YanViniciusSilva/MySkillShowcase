import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { TecnologiesComponent } from './pages/tecnologies/tecnologies.component';

const routes: Routes = [
  {
    path:'tecnologies',
    component: TecnologiesComponent
  },
  {
    path:'about-me',
    component: AboutMeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
