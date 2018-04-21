import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from "@angular/router";
import { DropDownService } from "app/service/drop-down.service";

@Injectable()
export class UserTypeResolveServiceService {

  constructor(private _dropDownService: DropDownService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this._dropDownService.getDropDown();
  }

}
