import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/authentication/shared/Models';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = new User();
  isNavbarOpened: boolean = false;

  constructor(private service: LayoutService) {   
  }

  ngOnInit(): void {
    this.fetchUser()
  }

  public toggleNavbar() {
    this.service.isOpenEmitter.subscribe((isOpened: boolean) => this.isNavbarOpened = isOpened);

    if (this.isNavbarOpened) {
      this.service.ShowAndHideMenu(false);
      return;
    }

    this.service.ShowAndHideMenu(true);
  }
  
  private fetchUser = () => this.user = this.service.fetchUser();
}
