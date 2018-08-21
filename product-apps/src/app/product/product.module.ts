import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import {FormsModule} from '@angular/forms';
import { ProductEditComponent } from './product-edit.component';
import { ProductCreateComponent } from './product-create.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule, FormsModule
  ],
  declarations: [ProductListComponent, ProductDetailsComponent, ProductEditComponent, ProductCreateComponent],
  exports: [ProductListComponent, ProductDetailsComponent,ProductEditComponent, ProductCreateComponent]
  
})
export class ProductModule { }
