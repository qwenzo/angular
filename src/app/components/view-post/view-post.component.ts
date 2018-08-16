import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  id:number;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      

   });
  }

}
