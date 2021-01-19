import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { IngresoRoutingModule } from "./ingreso-routing.module";
import { IngresoComponent } from "./ingreso.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        IngresoRoutingModule
    ],
    declarations: [
        IngresoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class IngresoModule { }