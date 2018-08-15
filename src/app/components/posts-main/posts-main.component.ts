import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-main',
  templateUrl: './posts-main.component.html',
  styleUrls: ['./posts-main.component.css']
})
export class PostsMainComponent implements OnInit {
  posts:Post[];

  constructor() { }

  ngOnInit() {
  }

}

interface Post{
  id:number,
  title:string,
  categories:string[],
  content:string
}
