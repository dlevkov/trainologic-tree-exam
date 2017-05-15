import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdListModule, MdCardModule, MaterialModule } from '@angular/material';
import { ContactService } from 'app/contacts/contact.service';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { ContactItemComponent } from './contacts/contact-item.component';
import { ContactGroupComponent } from './contacts/contact-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactItemComponent,
    ContactGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdCardModule,
    MdListModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
