import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TailboardComponent} from "./components/tailboard/tailboard.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import {FormsModule} from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TailboardPageComponent } from './pages/tailboard-page/tailboard-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { BoldDirectiveDirective } from './directives/bold-directive.directive';
import { UseDirectivesComponent } from './components/use-directives/use-directives.component';
import { UseServicesComponent } from './components/use-services/use-services.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TailboardComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent,
    TailboardPageComponent,
    LandingPageComponent,
    ProductsComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    BoldDirectiveDirective,
    UseDirectivesComponent,
    UseServicesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
