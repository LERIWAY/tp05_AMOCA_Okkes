import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentFormComponent } from './componentForm/componentForm.component';
import { ComponentAffichageComponent } from './componentAffichage/componentAffichage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ValiditeNumberDirective } from './directives/ValiditeNumber/validite-number.directive';
import { ValiditeStringDirective } from './directives/ValiditeString/validite-string.directive';
import { TelFormatPipe } from './pipe/tel-format.pipe';
import { MonserviceService } from './services/monservice.service';
import { ComponentCatalogueComponent } from './component-catalogue/component-catalogue.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentRechercheComponent } from './component-recherche/component-recherche.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueModule } from './modules/catalogue/catalogue.module';
import { ContactModule } from './modules/contact/contact.module';
import { NgxsModule } from '@ngxs/store';
import { MagasinState } from './magasin/magasin-state';
import { PanierComponent } from './panier/panier.component';
import { ApiHttpInterceptor } from './services/apihttpinterceptor';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ValiditeNumberDirective,
    ValiditeStringDirective,
    PanierComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CatalogueModule,
    ContactModule,
    NgxsModule.forRoot([MagasinState])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
