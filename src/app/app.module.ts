import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http/'
import {PostsService} from './services/posts.service'
import { AppComponent } from './app.component';
import { PostsMainComponent } from './components/posts-main/posts-main.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router';

const routes = [
  {path:'',component:PostsMainComponent},
  {path:'posts/post',component:NewPostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostsMainComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
