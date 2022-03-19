import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isOpen: boolean = false;

  constructor(private service: LayoutService) {   }

  ngOnInit(): void {
    this.service.isOpenEmitter.subscribe((isOpen) => this.isOpen = isOpen);
  }
}
