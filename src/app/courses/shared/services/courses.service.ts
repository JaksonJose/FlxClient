import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from '../Models/Category';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl: string = "http://192.168.0.3:5000/api/category";

  constructor(private httpClient: HttpClient) { 
  }

  /**
   * Get All Categories
   * @returns response object
   */
  public GetAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl).pipe(catchError(throwError));
  }

  /**
   * Get category by id
   * @param id 
   * @returns reponse object
   */
  public  GetCategoryById(id: number): any {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).pipe(catchError(throwError));
  }
}
