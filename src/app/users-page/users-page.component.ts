import { Component, OnInit } from '@angular/core';
import {DataService} from "../Services/data.service";
import {Observable} from "rxjs";
import {User} from "../objects/user";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '500ms', // small start delay between all of element animated instead of running all exactly in parallel
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersPageComponent implements OnInit {

  users$: Array<User>;        //$ is just a convention to represent an observable
  public clickedUser: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
       this.users$ = data;
  });
  }

  public userClicked(event): void{
    console.log("Parent child click event detected: ", event);
    this.clickedUser = event;
  }

}
