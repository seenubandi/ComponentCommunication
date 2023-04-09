import { Component,Input,OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() messageFromParent:string;

messageList = "Hello from post"
messageTo = "Hi From child"
Hello = "output hi from child"

@Output() messageEvent = new EventEmitter<string>()

constructor (){

}
ngOnInit(): void {
  
}
sendMessage() {
  this.messageEvent.emit(this.Hello)
}
}
