import User from './User';
import { ContactStatus } from './ContactStatus';

export default class Contact {
    requesterUser: User;
    addresseeUser: User;
    contactStatus: ContactStatus;
}