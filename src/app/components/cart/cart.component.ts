import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { DataService } from 'src/app/shared/services/data.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = []
  tableName = "products"
  grandtotal = 0
  // visible:boolean = false  
  constructor(private cartservice: CartService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.cartservice.getproduct().subscribe(res => {
      console.log(res, "cart-------------")
      this.products = res
      this.grandtotal = this.cartservice.gettotalprice()
    })
  }

  emptycart() {
    this.toast.warning({ detail: "Deleted all from Cart", summary: ' All Item has been deleted', duration: 3000 });
    this.cartservice.removerAllcart();
  }
  delete(item: any) {
    this.toast.warning({ detail: "Deleted from Cart", summary: 'Item has been deleted', duration: 1000 });
    this.cartservice.removecartitem(item)
    console.log(item, "delete")
  }
  confirm() {
    let txt;
    if (confirm("If Your confirm order please click on OK")) {
     alert("your Order plece very soon")
    } else {
      txt = "You pressed Cancel!";
    }
  }
}
