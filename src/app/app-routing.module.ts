import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {TailboardPageComponent} from "./pages/tailboard-page/tailboard-page.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

const routes: Routes = [
  {path: "landing-page", component: LandingPageComponent},
  {path: "products", component: ProductPageComponent},
  {path: "tailboard", component: TailboardPageComponent},
  {path: "about", component: AboutPageComponent},
  {path: '**', redirectTo: '/landing-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
