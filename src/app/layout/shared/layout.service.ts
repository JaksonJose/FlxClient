import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public isOpenEmitter = new EventEmitter<boolean>();

  constructor() { }

  public ShowAndHideMenu(isOpen: boolean) {
    this.isOpenEmitter.emit(isOpen);
  }
    
}
