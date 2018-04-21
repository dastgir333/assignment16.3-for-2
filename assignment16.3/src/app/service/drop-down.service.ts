import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DropDownService {

  private url : string = "http://localhost:3000/api/";
  constructor(private http: Http) { }

  getDropDown(): Observable<any[]> {
    return this.http.get(`${this.url}getGenderType`)
    .map((res) => res.json())
    .catch(error => Observable.throw(error))
  }

}
