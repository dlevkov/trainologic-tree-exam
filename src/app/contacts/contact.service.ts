import { ContactModel } from './contact-model';
import { ContactGroupModel } from './contact-group-model';
import { IContact } from './i-contact';
import { Injectable } from '@angular/core';

const contacts = [
  {
    id: 1,
    name: 'Friends',
    type: 'Group',
    contacts: [
      { id: 2, name: 'Udi', type: 'Contact' },
      { id: 3, name: 'Tommy', type: 'Contact' },
      {
        id: 6,
        name: 'Old Friends',
        type: 'Group',
        contacts: [
          { id: 7, name: 'Itay', type: 'Contact' },
        ]
      },
    ]
  },
  {
    id: 4,
    name: 'Family',
    type: 'Group',
    contacts: [
      { id: 5, name: 'Roni', type: 'Contact' },
    ]
  },
  { id: 8, name: 'Ori', type: 'Contact' },
];


@Injectable()
export class ContactService {

  public getContacts(): IContact[] {
    const result: IContact[] = [];
    contacts.forEach(element => {
      if (element.type === 'Contact') {
        result.push(new ContactModel(element));
      }
      if (element.type === 'Group') {
        result.push(this.addGroup(element));
      }
    });
    return result;
  }

  private addGroup(data: any): IContact {
    return new ContactGroupModel(data);
  }
}
