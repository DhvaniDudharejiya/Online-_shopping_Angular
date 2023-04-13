import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tableName = "products"
  constructor(private admin: AdminService , private router : Router) { }

  ngOnInit(): void {
  }
  addData(data: any) {
    console.log(data)
    //pass obj bcz some time name will be not same that time store data in obj
    const productObj = {
      id: data.id,
      title: data.title,
      image: data.image,
      description: data.description,
      price: data.price
    }
    console.log(productObj,"productobj")
    this.admin.addRecord(this.tableName, productObj).subscribe(() => {
      alert("Record added")
      this.router.navigate(['/admin'])
    })
  }
}
