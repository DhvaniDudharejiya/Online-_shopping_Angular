import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { DataService } from 'src/app/shared/services/data.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  tableName = "products"
  products : any
  constructor(private dataservice : DataService, private cartservice : CartService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.dataservice.getrecords(this.tableName).subscribe((res)=>{
      this.products = res
      console.log(res,"-------------------------------")

      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  
//add to cart
addtocart(item:any){
  this.toast.success({detail:"Add to Cart",summary:'Item has been added',duration:1000});
  this.cartservice.addtocart(item);
  console.log(item,"item")
}

}
