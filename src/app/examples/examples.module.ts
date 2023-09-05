import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from '@servoy/jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';

import { ExamplesComponent } from './examples.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        JwBootstrapSwitchNg2Module,
        NouisliderModule
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,
    ]
})
export class ExamplesModule { }
