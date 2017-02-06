import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{ContactServeService} from './contact-serve.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddContactComponent } from './list/add-contact.component';
import { HeaderComponent } from './list/header.component';
import { Routes, RouterModule } from '@angular/router';
import { route } from './app.routing';
import { EditContactComponent } from './list/edit-contact.component';
import { ViewContactComponent } from './list/view-contact.component';
import { SerachPipe } from './serach.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddContactComponent,
    HeaderComponent,
    EditContactComponent,
    ViewContactComponent,
    SerachPipe
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    route
  
  ],
  providers: [ContactServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
