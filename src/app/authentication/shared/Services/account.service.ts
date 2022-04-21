import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { Auth, UserResponse } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlApi: string = `http://192.168.0.3:5000/api/auth/login`;

  constructor(private http: HttpClient) { }

  /**
   * Set Token and user to local Storage
   * @param auth 
   */
  public async AuthenticateUser(auth: Auth) {
    this.http.post(this.urlApi, auth).subscribe((response: UserResponse) => {
      
      if (response.token) localStorage.setItem('token', response.token);      

      const user = JSON.stringify(response.responseData);
      localStorage.setItem('user', user);
    });
  }

  /**
   * 
   * @returns Get the Token stored in local storage
   */
  public getAthtorizationToken(): string | null {
    const token = localStorage.getItem('token');
    
    return token;
  }

  /**
  * Verify if user is authenticated
  * @returns boolean
  */
  public isUserLoggedIn(): boolean {
    const token = this.getAthtorizationToken();
  
    if (!token || this.isTokenExpired(token)) return false;
  
    return true;
  }
  
  /**
   * Verify is token is valid and not expirated
   * @param token 
   * @returns Date
   */
  private getTokenExpirationDate(token: string): Date | null {
    try {
      const decoded: any = jwtDecode<JwtPayload>(token);
    
      if (!decoded.exp) return null;
  
      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
  
      return date;
    } catch (ex) {
      console.error(`getTokenExpirationDate method Error: ${ex}`);
      return null;
    }
  }

  /**
   * Verify if token is valid
   * @param token 
   * @returns boolean
   */
  private isTokenExpired(token?: string): boolean {
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (!date) return true;

    return !(date.valueOf() > new Date().valueOf());
  }
}
