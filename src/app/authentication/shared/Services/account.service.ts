import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models';
import { environment } from '../../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlApi: string = `http://192.168.0.3:5000/api/auth`;

  constructor(private http: HttpClient) { }

  public async AuthenticateUser(user: User) {
    this.http.post(this.urlApi, user).subscribe(response => console.log(response));
  }
}
