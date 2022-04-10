import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { Auth, UserResponse } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlApi: string = `http://192.168.0.3:5000/api/auth/login`;

  constructor(private http: HttpClient) { }

  public async AuthenticateUser(auth: Auth) {
    this.http.post(this.urlApi, auth).subscribe((response: UserResponse) => {
      
      if (response.token) localStorage.setItem('token', response.token);      

      const user = JSON.stringify(response.responseData);
      localStorage.setItem('user', user);
    });
  }
}
