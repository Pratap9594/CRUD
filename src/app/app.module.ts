import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateemployeeComponent,
    UpdateemployeeComponent,
    ListemployeeComponent,
    ViewemployeeComponent,
    DeleteemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
