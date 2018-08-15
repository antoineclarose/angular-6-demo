import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../objects/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  @Input()
  private user: User;

  @Output()
  clickedWho: EventEmitter<string> = new EventEmitter<string>();

  public clicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public clickedOnUser():void {
    console.log("User component clicked");
    this.clickedWho.emit(this.user.name);
  }

  public wasClicked(){
    this.clicked = true;
  }

}
