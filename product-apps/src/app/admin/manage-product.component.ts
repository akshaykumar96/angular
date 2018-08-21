import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

 
  constructor(private service:ProductService) { }
  productList :any[];
  selectedModel: ProductModel
  ngOnInit() {
    this.selectedModel= new ProductModel(0,"",0,0);
    this.service.getAll().subscribe((Response)=>
  {
    this.productList=Response as any[];
  });
  
  }

  addNew()
  {
    this.selectedModel= new ProductModel(0,"",0,0);
  }
  create(event)
  {
    console.log("create called",event.value);
    
      this.service.create(this.selectedModel).subscribe({
        complete :()=>{
        console.log("completed");
        }  }); 
   
    }
  update(event)
  {
    console.log("update called",event.value);
    this.service.update(this.selectedModel).subscribe({
      complete :()=>{
      console.log("completed");      }
    });
  }
}
