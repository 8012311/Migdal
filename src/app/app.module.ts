import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { ProgressComponent } from './progress/progress.component';
import { ActionsSectionComponent } from './progress/actions-section/actions-section.component';
import { AppService } from './app.service';
import { PhonePipe } from './phone.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ContactListComponent,
        HeaderComponent,
        ProgressComponent,
        ActionsSectionComponent,
        PhonePipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
