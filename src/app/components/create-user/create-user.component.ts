import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  tableName = "Users"
  constructor(private admin: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  getData(val: any) {
    console.log(val)
    const userObj = {
      username: val.fname,
      address:val.address,
      email: val.email,
      lname: val.lname,
      mno: val.mno,
      password:val.pass,
      term: val.term,
    }
    console.log(userObj, "productobj")
    this.admin.addRecord(this.tableName, userObj).subscribe(() => {
      alert("Record added")
      this.router.navigate(['/admin'])
    })
  }
}
