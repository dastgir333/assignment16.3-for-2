import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from 'app/service/drop-down.service';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchByPipe } from './search-by.pipe';
import { UserDataComponent } from './user-data/user-data.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListService } from 'app/service/list.service';
import { routedComponents } from 'app/routing/routing';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from "app/service/auth-guard.service";
import { UnSavedChangesGuardService } from "app/service/un-saved-changes-guard.service";
import { UserTypeResolveServiceService } from "app/service/user-type-resolve-service.service";


@NgModule({
  declarations: [
    RootComponent,
    CapitalizePipe,
    SearchByPipe,
    UserDataComponent,
    UserListComponent,
    UserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routedComponents
  ],
  providers: [DropDownService, ListService, AuthGuardComponent, UnSavedChangesGuardService,UserTypeResolveServiceService],
  bootstrap: [RootComponent]
})
export class AppModule { }
