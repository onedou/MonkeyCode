import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './pages/index/index.component'
import { IndexModule } from './pages/index/index.module'
import { SignUpComponent } from './pages/signUp/signUp.component'
import { SignUpModule } from './pages/signUp/signUp.module'

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'signUp', component: SignUpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    IndexModule,
    SignUpModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
