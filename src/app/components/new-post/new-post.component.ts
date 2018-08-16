import { Component, OnInit } from '@angular/core';
import {Post} from '../posts-main/posts-main.component';
import {PostsService} from '../../services/posts.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  styles={
    borderRadius:'3px',
    padding:'5%'
}
  form:Post={id:0,title:'',content:'',categories:['']};
  constructor(private postsService:PostsService) { 
    
  }

  ngOnInit() {

  }
    
  

  onSubmit(e){
    this.postsService.createPost(this.form).subscribe(
      (res:Post) =>{
     console.log(res);
      }
    )
  
  }

}
