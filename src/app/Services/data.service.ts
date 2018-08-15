import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../objects/user";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {

  }

  public getUsers():Observable<Array<User>>{
    return this._http.get<Array<User>>('https://jsonplaceholder.typicode.com/users').pipe(
      catchError((error: any) => Observable.throw(error)));
  }

  public getUser(userId: string):Observable<User> {
    return this._http.get<User>('https://jsonplaceholder.typicode.com/users/'+userId)
  }

}
