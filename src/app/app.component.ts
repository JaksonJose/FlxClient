import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public supportedLanguages: Array<string> = ['en', 'pt'];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportedLanguages);
    this.translateService.setDefaultLang('en');

    const browserLang = translateService.getBrowserLang();
    if(browserLang) this.translateService.use(browserLang);
  }
}
