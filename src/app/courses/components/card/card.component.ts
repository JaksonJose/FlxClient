import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaxTextLenth } from 'src/app/utils/CommonMethods';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('item')
  item: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Redirect to build the subcategory page
   * @param id 
   */
  public redirectToLessons(id: number): void {
    this.router.navigate([`/category/${id}/`]);
  }

  /**
   * Limit the text length to display
   * @param text text to cut
   * @param length the max size would like to text to have
   * @returns string text cut with the max length
   */
  public textSize = (text: string, maxLength: number) => MaxTextLenth(text, maxLength);
}
