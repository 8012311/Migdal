import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppService } from '../../app.service';
import { Contact } from '../../models';

@Component({
    selector: 'app-actions-section',
    templateUrl: './actions-section.component.html',
    styleUrls: ['./actions-section.component.css']
})
export class ActionsSectionComponent implements OnInit {

    @Output() add = new EventEmitter();
    @Input() count: Array<Contact>;

    isToShow = true;

    constructor(private appService: AppService) { }

    ngOnInit() {
    }

    addToContacts() {
        this.add.emit();
    }

    deleteContacts() {
        this.appService.deleteContacts();
    }

    resetContacts() {
        this.appService.resetContacts();
    }
}
