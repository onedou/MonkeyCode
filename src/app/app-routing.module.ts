import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './pages/index/index.component'
import { IndexModule } from './pages/index/index.module'
import { SignUpComponent } from './pages/signUp/signUp.component'
import { SignUpModule } from './pages/signUp/signUp.module'
import { CurriculumComponent } from './pages/curriculum/curriculum.component'
import { CurriculumModule } from './pages/curriculum/curriculum.module'
import { ContactComponent } from './pages/contact/contact.component'
import { ContactModule } from './pages/contact/contact.module'


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    IndexModule,
    SignUpModule,
    CurriculumModule,
    ContactModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
