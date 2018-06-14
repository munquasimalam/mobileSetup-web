
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent }   from './login/login.component';


import { LoginService } from './services/login.service';
import { AlertService} from './services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,routing,HttpClientModule
  ],
  providers: [LoginService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
