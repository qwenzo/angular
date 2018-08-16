import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../components/posts-main/posts-main.component';
const URLMAIN='http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=mod21312345';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http:HttpClient) { }

   gtPosts(){
    const URL=URLMAIN+API_KEY;
    return this.http.get<Post[]>(URL);

  }

  createPost(data){
    const URL=URLMAIN+API_KEY;
    return this.http.post<Post>(URL,data);
  }
}
