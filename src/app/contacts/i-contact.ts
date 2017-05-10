import { ContactModelType } from './contact-model-type.enum';

export interface IContact {
    id: number;
    name: string;
    type: ContactModelType;
}
