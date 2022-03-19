import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../shared';
import { User } from '../shared/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: true }) 
  loginForm!: NgForm;

  user: User = new User();

  constructor(private service: AccountService ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if(this.loginForm.valid){
      this.user.role = "admin";
      this.service.AuthenticateUser(this.user);
    }
  }

}
