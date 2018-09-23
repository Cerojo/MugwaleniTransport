import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
/*import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SupportComponent } from './support/support.component'*/

const routes : Route [] = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'services', component: ServicesComponent },
  {path: '**', component: NotFoundComponent}/*,
  /*{path: 'terms', component: TermsComponent },
  {path: 'privacy', component: PrivacyComponent },
  {path: 'support', component: SupportComponent }*/
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }