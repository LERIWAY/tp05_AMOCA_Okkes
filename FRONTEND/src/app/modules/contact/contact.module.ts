import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFormComponent } from 'src/app/componentForm/componentForm.component';
import { ComponentAffichageComponent } from 'src/app/componentAffichage/componentAffichage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TelFormatPipe } from 'src/app/pipe/tel-format.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ComponentFormComponent}
]

@NgModule({
  declarations: [ComponentFormComponent, ComponentAffichageComponent, TelFormatPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
