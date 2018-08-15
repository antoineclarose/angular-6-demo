import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../Services/data.service";
import {Observable, Subscription} from "rxjs";
import {User} from "../objects/user";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private user$: User = new User();
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.routeSubscription = this.route.params.subscribe(
      params => this.user$.name = params.id,
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer received a complete notification'),
    );
  }

  ngOnInit() { //FINITE Observable
    this.data.getUser(this.user$.name).subscribe(
      data => this.user$ = data,
      error1 => console.error('Could not retreive user ' + this.user$.name),
      ()=> console.log("Auto completed")
    );
  }

  ngOnDestroy(){
    console.log('OnDestroy');
    this.routeSubscription.unsubscribe();  // INFINITE Observable
  }

}
