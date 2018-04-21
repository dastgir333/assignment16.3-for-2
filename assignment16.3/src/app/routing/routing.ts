import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from 'app/user-data/user-data.component';
import { UserListComponent } from 'app/user-list/user-list.component';
import { UserDetailComponent } from "app/user-detail/user-detail.component";
import { LoginComponent } from "app/login/login.component";
import { AuthGuardComponent } from "app/service/auth-guard.service";
import { UnSavedChangesGuardService } from "app/service/un-saved-changes-guard.service";
import { UserTypeResolveServiceService } from "app/service/user-type-resolve-service.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserDataComponent, canActivate: [AuthGuardComponent],
   canDeactivate:[UnSavedChangesGuardService],
   resolve: { genderType : UserTypeResolveServiceService }
  },
  { path: 'userList', component: UserListComponent },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  { path: '**', component: UserDataComponent }
];

export const routedComponents = RouterModule.forRoot(routes)