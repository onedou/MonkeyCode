import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component'
import { IndexModule } from './components/index/index.module'
import { signUpComponent } from './components/signUp/signUp.component'
import { signUpModule } from './components/signUp/signUp.module'

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'signUp', component: signUpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    IndexModule,
    signUpModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
