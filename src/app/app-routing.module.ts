import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './views/main/home/home.page';
import { MainView } from './views/main/main.view';

const routes: Routes = [
  {path:'', redirectTo:'main/home', pathMatch:'full'},
  {path:'main', component: MainView, children:[
    {path: 'home', component: HomePage},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
