import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AccountService } from "../Services/account.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private accountService: AccountService){ }

  /**
   * This send token into http request header
   * @param req 
   * @param next 
   * @returns Observable<HttpEvent>
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    
    const token = this.accountService.getAthtorizationToken();

    let request: HttpRequest<any> = req;

    if(token){
      // the interception has the imutability concept
      // the clone is for change the properties
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }   

      return next.handle(request).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('Error: ', error.error.message);
    } else {
      console.error(`Error code: ${error.status}, Error: ${JSON.stringify(error.error)}`);
    }

    return throwError(() => new Error('Error, try it again'));
  }
}