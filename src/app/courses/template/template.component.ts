import { Component, OnInit } from '@angular/core';
import { Category, CoursesService } from '../shared';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  categories: Array<any> = new Array();

  constructor(private service: CoursesService) { }

  ngOnInit(): void {
    this.FetchAllCourses();
  }

  private FetchAllCourses(){
    let response = this.service.GetAllCourses();  
    response.subscribe((categories: Category[]) => this.categories = categories);
  }

}
