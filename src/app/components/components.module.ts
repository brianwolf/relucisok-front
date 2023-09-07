import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from '@servoy/jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';

import { ComponentsComponent } from './components.component';
import { EquipoComponent } from './equipo/equipo.component';
import { FotosComponent } from './fotos/fotos.component';
import { HeaderComponent } from './header/header.component';
import { RedesComponent } from './redes/redes.component';
import { ServiciosComponent } from './servicios/servicios.component';

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
        ServiciosComponent,
        RedesComponent,
        FotosComponent,
        HeaderComponent,
        EquipoComponent
    ],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }
