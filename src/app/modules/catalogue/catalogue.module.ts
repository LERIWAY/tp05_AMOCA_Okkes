import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCatalogueComponent } from 'src/app/component-catalogue/component-catalogue.component';
import { ComponentRechercheComponent } from 'src/app/component-recherche/component-recherche.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ComponentCatalogueComponent }
]


@NgModule({
  declarations: [ComponentCatalogueComponent, ComponentRechercheComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogueModule { }
