import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'home'},
  {path: 'catalogue', component: CatalogueComponent, title: 'catalogue'},
  {path: 'about', component: AboutComponent, title: 'about'},
  {path: 'contact', component: ContactComponent, title: 'contact'},
];
