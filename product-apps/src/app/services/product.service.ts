import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const product: ProductModel[]=[
  {productId:1,productName:"sample 1", unitPrice:10,unitsInStock:50},
  {productId:2,productName:"sample 2", unitPrice:20,unitsInStock:100},
  {productId:3,productName:"sample 3", unitPrice:30,unitsInStock:150},
  {productId:4,productName:"sample 4", unitPrice:40,unitsInStock:200},
  {productId:5,productName:"sample 5", unitPrice:50,unitsInStock:250},
];
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: ProductModel[];
  constructor(private http:HttpClient) { 
    //this.productList=product;
  }
  productUrl:string ="http://localhost:9000/api/product";
  getAll()
{
  return this.http.get(this.productUrl);

 // return this.productList;
}

getDetails(id:number)
{ let url =this.productUrl + "/"+id;
  return this.http.get<ProductModel>(url);
 // let item = this.productList.find((c)=> c.productId==id);
 // return item;
}
create (item:ProductModel)
{
  //this.productList.push(item);
  let body = JSON.stringify(item);
  let httpOptions=
  {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }
return this.http.post(this.productUrl,body,httpOptions);
}
update(item: ProductModel)
{ let url =this.productUrl + "/"+item.productId;
  let body = JSON.stringify(item);
  let httpOptions=
  {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }
return this.http.put(url,body,httpOptions);
   
}
remove(id:number)
{
  let url =this.productUrl + "/"+id;
  return this.http.delete(url);
}
}
