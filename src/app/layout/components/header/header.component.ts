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

  constructor(private service: LayoutService) {   
  }

  ngOnInit(): void {
    this.fetchUser()
  }
  
  private fetchUser = () => this.user = this.service.fetchUser();
}
