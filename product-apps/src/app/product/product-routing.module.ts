import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductCreateComponent } from './product-create.component';


const routes: Routes = [
{path:"product", component: ProductListComponent},
{path: "product/new", component:ProductCreateComponent},
{path:"product/:id", component:ProductDetailsComponent},
{path: "product/edit/:id",component:ProductEditComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
