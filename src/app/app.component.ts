import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  messageParent:string = 'Communication from parent';
  HiFrom  = ""
  HiFromEvent = ""
  @ViewChild(PostComponent) childComp:any;

  constructor(){

  }
  ngAfterViewInit(): void {
    this.HiFrom = this.childComp.messageTo
  }

  reciveMessage($event :any) {
    this.HiFromEvent = $event
  }
}
