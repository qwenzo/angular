import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http/'
import {PostsService} from './services/posts.service'
import { AppComponent } from './app.component';
import { PostsMainComponent } from './components/posts-main/posts-main.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
