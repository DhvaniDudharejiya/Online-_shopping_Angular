import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  term: any
  pageno: any
  productData: any
  // order: string = 'name';
  order: string = '';
  reverse: boolean = true
  tableName = "products"

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    let s = this.admin.getrecords(this.tableName)
    s.subscribe((res) => {
      //  console.log(res)
      this.productData = res
      console.log(this.productData, "products data")
    })
  }

  delete(id: any) {
    this.admin.deleteRecord(this.tableName, id).subscribe(() => {
      alert("delete record successfully")
      this.ngOnInit();
    })
  }

}
