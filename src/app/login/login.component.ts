import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _router: Router;

  constructor(private router: Router) { 
    this._router = router;
  }
  username: string;
  password: string;
  showSpinner: string;
    ngOnInit() {
    }
    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       this._router.navigateByUrl('/register');
      }else {
        alert("Invalid credentials");
      }
    }
  }
