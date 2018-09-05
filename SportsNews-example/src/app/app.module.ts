import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './dashboard/news/news.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [  // 모듈에 속한 component 목록
    AppComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [  // 외부 모듈
    BrowserModule
  ],
  providers: [],  // 참조하려는 서비스
  bootstrap: [AppComponent] // 시작 컴포넌트
})
export class AppModule { }
