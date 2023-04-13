import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  productData: any
  tableName= "products"
  constructor(private activatedRoute :ActivatedRoute, private admin : AdminService, private route : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((para) => {
      this.id = para.get('id')
      console.log(this.id,"*******************************************")
    })
    this.admin.getrecord(this.tableName,this.id).subscribe((res) => {
      this.productData = { ...res } // this will store the data in object format
      console.log(res,"===================================")
    })
  }
  putData(data: any) {
    const temp = {
      id: this.id,
      title: data.title,
      image: data.image,
      description: data.description,
      price: data.price
    }
    // console.log(temp)
    this.admin.updateRecord(this.tableName,temp).subscribe(() => {
      alert("Record update successfully")
      this.route.navigate(['/admin'])
    })


  }
}
