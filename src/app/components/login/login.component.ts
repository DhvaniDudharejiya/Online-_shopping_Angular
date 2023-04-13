import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: any
  upass: any
  userData: any

  constructor(private admin: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  getData() {
    console.log(this.uname, "Username", "+", this.upass)
    this.admin.getrecords("Users").subscribe((res) => {
      // console.log(res,"res--------------------------------------------------")
      this.userData = res
      const data = this.userData.filter((item: any) => {
        return ((item.username == this.uname) && (item.password == this.upass))
      })

      if (data.length > 0 && this.uname == "admin") {
        console.log("valid user")
        this.admin.signIn(this.uname)
        this.router.navigate(['/admin'])
      }
      else if(data.length > 0 && this.uname != "admin"){
        console.log("valid user")
        this.admin.signIn(this.uname)
        this.router.navigate(['/product'])
      }
      else {
        console.log("invalid user")
        alert("Invalid Credentials")
        this.uname = ""
        this.upass = ""
      }
    })
  }
}
