import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  flag: boolean = true
  constructor(private admin: AdminService, private router: Router) { }

  ngOnInit(): void {
    const name = sessionStorage.getItem("user")
    if (name == "admin") {
      this.flag = false
    }
  }
  signout() {
    if (confirm('Are you sure you want to sign out')) {
      this.admin.signOut()
      this.router.navigate(['/'])
    }
  }
}