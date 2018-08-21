import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import {ActivatedRoute,ParamMap} from  "@angular/router";
import{ ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  model: ProductModel;
  constructor(  private service :ProductService,private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get("id"));
    console.log(`selected id: ${id}`);
//this.model=new ProductModel(1,"sample",100,10);
//this.model=this.service.getDetails(parseInt(id));
this.service.getDetails(id).subscribe((response)=>{
  this.model=response ;
});
 }
  submit()
  {
   this.service.update(this.model).subscribe({
     complete :()=>{
     this.router.navigate(["/product"]);
    
     }
   }); 

  }  
  }