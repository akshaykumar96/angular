import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 // productList:ProductModel[];
 productList : any[];
  constructor(private service: ProductService) { }

  ngOnInit() {
    //this.productList=this.service.getAll();
  //  this.service.getAll().subscribe((response)=>{
  //    this.productList=response as any[];
  //    console.log("request return" ,this.productList);
  // })
  this.loadProducts();
  }
  loadProducts()
  {
    this.service.getAll().subscribe((response)=>{
      this.productList=response as any[];
      console.log("request return" ,this.productList);
    })
  }

  remove(productId)
  {
    this.service.remove(productId).subscribe({
      complete :()=> {
        this.loadProducts();
      }
    })
  }
}
