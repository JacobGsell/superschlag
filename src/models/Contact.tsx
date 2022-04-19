import User from './User';
import { ContactStatus } from './ContactStatus';

export default class Contact {
    addresseeUser: User | undefined;
    contactStatus: ContactStatus | undefined;
}