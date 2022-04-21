import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;

  constructor(private service: LayoutService) {   }

  ngOnInit(): void {
    this.service.isOpenEmitter.subscribe((isOpen) => this.isOpen = isOpen);
  }
}
