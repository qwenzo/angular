import { Component, OnInit } from '@angular/core';
import {Post} from '../posts-main/posts-main.component';
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
  constructor(form:Post) { 
  }

  ngOnInit() {
  }

  onSubmit(e){
    console.log(e);
  }

}
