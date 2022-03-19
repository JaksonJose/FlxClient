import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Category, CoursesService, Subcategory } from '../shared';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  subscription?: Subscription;
  categories: Array<Category> = new Array();
  subCategories: Array<Subcategory> = new Array();
  isError: Boolean = false;

  constructor(private service: CoursesService, private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.routeActive.params.subscribe((params: any) => {

      !params.id ? this.FetchAllCourses() : this.FetchCourseById(params.id);

    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private FetchAllCourses() {
    let response: Observable<Category[]> = this.service.GetAllCategories();
    response.subscribe((categories: Array<Category>) => {
      this.categories = categories;
    });
  }

  private FetchCourseById(id: string) {
    let response = this.service.GetCategoryById(Number(id));
    response.subscribe(
      {
        next: (response: any) => {
          let [category] = response.responseData;
          this.subCategories = category.subCategories;
        },
        error: () => this.isError = true
      });
  }
}
