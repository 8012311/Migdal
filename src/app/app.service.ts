import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Contact } from "./models"

@Injectable()
export class AppService {

    contactsObservable: Observable<Array<Contact>>;
    private contactsBehavior: BehaviorSubject<Array<Contact>>;

    private contactList: Array<Contact> = [
        {
            id: 1,
            deliveryFlag: true,
            type: {
                code: 1,
                value: "מבוטח"
            },
            firstName: "ניקיטה",
            lastName: "ג'יין",
            identity: 278545412,
            address: {
                homeNumber: 9,
                cityName: "רחובות",
                streetName: "אופנהיימר"
            },
            cellPhone: 525816206,
            email: "NIKITA_JAIN@AMAT.COM"
        },
        {
            id: 2,
            deliveryFlag: false,
            type: {
                code: 21,
                value: "סוכן"
            },
            firstName: "טוביה",
            lastName: "בצקי",
            identity: 433974846,
            address: {
                cityName: "מחנה תל נוף",
            },
            cellPhone: 525452206,
        }
    ];

    constructor() {
        this.contactsBehavior = new BehaviorSubject<Array<Contact>>(this.contactList)
        this.contactsObservable = this.contactsBehavior.asObservable();
        console.log("here!");
        
    }

    addContact(contact: Contact) {
        this.contactList.push(contact);
        this.contactsBehavior.next(this.contactList);
    }

    deleteContacts() {
        this.contactList = new Array<Contact>();
        this.contactsBehavior.next(this.contactList);
    }

    getContacts() {
        return this.contactList;
    }

    resetContacts() {
        const firstContact = this.contactList.length ? this.contactList[0] : null;

        this.contactList = new Array<Contact>();

        if (firstContact) {
            this.contactList.push(firstContact);
        }

        this.contactsBehavior.next(this.contactList);
    }

}
