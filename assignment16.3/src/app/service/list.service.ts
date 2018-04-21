import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class ListService {

  private url: string = "http://localhost:3000/api/"

  constructor(private http: Http) { }

  /** Add list in the array List. */
  addList(arrayListDetail: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}addUserDetail`, arrayListDetail, options)
      .map((res) => res.json())
  }

  /**Get the cricket list from the array. */
  getUserList(): Observable<any[]> {
    return this.http.get(`${this.url}getUserDetails`)
      .map((res) => res.json())
      .catch(error => Observable.throw(error))
  }

  /**Delete Cricket */
  deleteUser(userId: string) {
    return this.http.delete(`${this.url}deleteUserDetail/${userId}`, )
      .map((res) => res.json())
      .catch(error => Observable.throw(error))
  };
}
