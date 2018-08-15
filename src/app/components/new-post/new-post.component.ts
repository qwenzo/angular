import { Component, OnInit } from '@angular/core';
import {Post} from '../posts-main/posts-main.component';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  form:Post;
  constructor() { }

  ngOnInit() {
  }

}
