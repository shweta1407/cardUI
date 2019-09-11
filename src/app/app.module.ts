import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ToggleComponent } from './toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ViewDashboardComponent,
    UserProfileComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
