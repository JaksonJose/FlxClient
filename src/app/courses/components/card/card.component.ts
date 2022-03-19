import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('category')
  category: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirectToLessons(id: number): void {
    this.router.navigate([`/categories/${id}/`]);
  }
}
