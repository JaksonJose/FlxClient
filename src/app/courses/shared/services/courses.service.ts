import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl: string = "http://192.168.0.3:5000/api/category";

  constructor(private httpClient: HttpClient) { 
  }

  public GetAllCourses(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  public  GetCourseById(id: number): Observable<Category>  {
    return this.httpClient.get<Category>(`${this.baseUrl}/${id}`);
  }
}
