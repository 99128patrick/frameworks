import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

  
    {path: 'login', Component: LoginComponent},
    {path:'heros', Component: HeroComponent},
    {path: 'dashboard', Component: DashboardComponent},
    

    {path: '', redirectTo: '/login', pathMath: 'full'},
    {path: '**', Component: PageNotFoundComponent},
];
    
    


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
