import { ContactGroupModel } from './contact-group-model';
import { ContactModel } from './contact-model';
import { ContactModelType } from './contact-model-type.enum';
import { IContact } from './i-contact';
import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dl-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  public contacts: IContact[];
  constructor(private _service: ContactService) { }

  ngOnInit() {
    this.contacts = this._service.getContacts();
  }

}
