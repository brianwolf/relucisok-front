import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from '@servoy/jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { ComponentsComponent } from './components.component';
import { NgbdModalBasic } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationComponent } from './notification/notification.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { RedesComponent } from './redes/redes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TypographyComponent } from './typography/typography.component';
import { FotosComponent } from './fotos/fotos.component';

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
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        ServiciosComponent,
        RedesComponent,
        FotosComponent
    ],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }
