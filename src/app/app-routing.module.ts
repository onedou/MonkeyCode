import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './pages/index/index.component'
import { IndexModule } from './pages/index/index.module'
import { signUpComponent } from './pages/signUp/signUp.component'
import { signUpModule } from './pages/signUp/signUp.module'

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
