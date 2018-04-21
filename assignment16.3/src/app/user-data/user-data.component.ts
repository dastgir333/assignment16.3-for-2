import { Component, OnInit } from '@angular/core';
import { ListService } from 'app/service/list.service';
import { DropDownService } from 'app/service/drop-down.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  title: string;
  name: string;
  lastName: string;
  userDetail;

  genderArray: any[] = [];
  constructor(private _listService: ListService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userModel()
    this.route.data.forEach((data: any) => {
      this.genderArray = data.genderType;
    });
  }

  userModel() {
    return this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      genderType: '',
      date: ''
    }
  }
  submit(values) {

    const model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      gender: values.gender,
      date: values.date
    }
    this._listService.addList(model)
      .subscribe((res) => {
        this._router.navigate(['/userList']);
      }, 
      error => console.log(error));

  }

  canDeactivate() {
    if (this.userDetail.name !== ''
      || this.userDetail.lastName !== ''
      || this.userDetail.age !== ''
      || this.userDetail.genderType !== ''
      || this.userDetail.date !== '') {
      return window.confirm('Are you sure you don’t want to navigate?');
    }
    return true;
  };

}
