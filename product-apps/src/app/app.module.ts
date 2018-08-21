import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './ui/header-component.component';
import { FooterComponent } from './ui/footer.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { ProductModule } from './product/product.module';
import {AdminModule} from "./admin/admin.module";

const routes:Routes=[
{path: "home",component:DashboardComponent},
{path:"login",component:LoginComponent},
{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"**",component:PageNotFoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
    ProductModule, AdminModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
