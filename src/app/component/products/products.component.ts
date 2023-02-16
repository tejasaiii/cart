import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productList:any;

  constructor(private api:ApiService){}

  ngOnInit():void{
   this.api.getProducts().subscribe(res=>this.productList=res)
  }

}
