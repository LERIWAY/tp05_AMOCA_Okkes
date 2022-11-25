import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', loadChildren: () => import('./modules/catalogue/catalogue.module').then(m => m.CatalogueModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
