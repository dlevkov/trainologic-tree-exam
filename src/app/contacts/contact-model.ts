import { IContact } from './i-contact';
import { ContactModelType } from './contact-model-type.enum';

export class ContactModel implements IContact {
    public id: number;
    public name: string;
    public type: ContactModelType;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.type = ContactModelType.Contact;
    }
}
