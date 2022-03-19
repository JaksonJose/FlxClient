import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CardComponent } from './components/';
import { CoursesService } from './shared';
import { TemplateComponent } from './template';
import { HttpLoaderFactory } from '../app.module';


@NgModule({
  declarations: [
    TemplateComponent,
    CardComponent,    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
