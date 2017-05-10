import { IContact } from './i-contact';
import { ContactModelType } from './contact-model-type.enum';

export class ContactGroupModel implements IContact {
    public id: number;
    public name: string;
    public type: ContactModelType;
    public contacts: IContact[] = [];
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.type = ContactModelType.Group;
        data.contacts.forEach(element => {
            this.contacts.push(element);
        });
    }
}
