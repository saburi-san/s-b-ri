import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { FrontendComponent } from './frontend/frontend.component';
import { ApiManagementComponent } from './api-management/api-management.component';
import { BackendComponent } from './backend/backend.component';


export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'ge\'nesis'},
  {path: 'catalogue', component: CatalogueComponent, title: 'catalogue'},
  {path: 'about', component: AboutComponent, title: 'about'},
  {path: 'contact', component: ContactComponent, title: 'contact'},

  {path: 'frontend', component: FrontendComponent, title: 'frontend'},
  {path: 'api', component: ApiManagementComponent, title: 'api management'},
  {path: 'backend', component: BackendComponent, title: 'backend'},
];
