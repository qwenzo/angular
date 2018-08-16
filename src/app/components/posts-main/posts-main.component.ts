import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts-main',
  templateUrl: './posts-main.component.html',
  styleUrls: ['./posts-main.component.css']
})
export class PostsMainComponent implements OnInit {
  styles={
    postContainer:{
      borderRadius:'3px',
      paddingLeft:'1%'
    },
    newPost:{
      //margin:'5px'
    }
    //border: '1px solid #ddd',
   

}
  posts:Post[];
  

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.postsService.gtPosts().subscribe(
      (res:Post[]) =>{
      this.posts=res;
      }
    )
  }

}

export interface Post{
  id:number,
  title:string,
  categories:string[],
  content:string
}


