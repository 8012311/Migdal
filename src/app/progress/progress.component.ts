import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Contact, Progress } from '../models';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnDestroy {

    @Input() progress: Progress

    contactPersons: Array<Contact>;

    private contactsSubscription: Subscription;
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.contactsSubscription = this.appService.contactsObservable.subscribe(list => this.contactPersons = list);
    }

    ngOnDestroy() {
        if (this.contactsSubscription) {
            this.contactsSubscription.unsubscribe();
        }
    }

    addInsuredToContacts() {
        const newContact = this.createContact();
        this.appService.addContact(newContact);
    }

    private createContact(): Contact {
        return new Contact({
            id: this.contactPersons.length,
            deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
            type: {
                code: 1,
                value: "מבוטח"
            },
            firstName: this.progress.insured.firstName,
            lastName: this.progress.insured.lastName,
            identity: this.progress.insured.identity,
            address: {
                cityName: this.progress.insured.address.cityName,
                streetName: this.progress.insured.address.streetName
            },
            cellPhone: this.progress.insured.cellPhone,
            email: this.progress.insured.email
        });
    }
}
