import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared';
import { Auth } from '../shared/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: true }) 
  loginForm!: NgForm;

  auth: Auth = new Auth();

  constructor(private service: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  public async onSubmit() {
    if(this.loginForm.valid){
      await this.service.AuthenticateUser(this.auth);

      this.router.navigate(['/categories']);
    }
  }

}
