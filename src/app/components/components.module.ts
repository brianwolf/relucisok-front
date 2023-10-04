import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from '@servoy/jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';

import { ComponentsComponent } from './components.component';
import { TeamComponent } from './team/team.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HeaderComponent } from './header/header.component';
import { NetworksComponent } from './networks/networks.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        ServicesComponent,
        NetworksComponent,
        PicturesComponent,
        HeaderComponent,
        TeamComponent
    ],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }
