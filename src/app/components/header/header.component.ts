import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public totalitem = 0;
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartservice.getproduct().subscribe((res)=>{
      this.totalitem = res.length;

    })
  }

}
