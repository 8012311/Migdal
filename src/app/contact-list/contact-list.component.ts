import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from '../app.service';
import { Contact, ContactPersonType, ProgressType } from '../models';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

    @Input() progress: any;

    contactPersons: Array<Contact>;

    private contactsSubscription: Subscription;
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.contactsSubscription = this.appService.contactsObservable.subscribe(list => this.getContacts());
    }

    ngOnDestroy() {
        if (this.contactsSubscription) {
            this.contactsSubscription.unsubscribe();
        }
    }

    addContactPerson() {
        const newContact = new Contact({
            id: this.contactPersons.length,
            deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
            type: {
                code: 5,
                value: "שאר"
            },
            firstName: "ישראל",
            lastName: "ישראלי",
            identity: 278545412,
            address: {
                homeNumber: 9,
                cityName: "רחובות",
                streetName: "אופנהיימר"
            },
            cellPhone: 525816206,
            email: "NIKITA_JAIN@AMAT.COM"
        });

        this.appService.addContact(newContact)
    }

    isInsuredInHealthClaim(contact: Contact) {
        return this.isAmbulatoryProcess() && this.contactIsInsured(contact);
    }

    private getContacts() {
        this.contactPersons = this.appService.getContacts();
    }

    private isAmbulatoryProcess() {
        return this.progress && (this.progress.processType === ProgressType.AMBULATORY_HEALTH_CLAIM ||
            this.progress.processType === ProgressType.AMBULATORY_HEALTH_CLAIM_CONT);
    }

    private contactIsInsured(contact: Contact) {
        return contact.type.code === ContactPersonType.INSURED;
    }
}
