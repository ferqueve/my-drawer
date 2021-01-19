import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ListaRoutingModule } from "./lista-routing.module";
import { ListaComponent } from "./lista.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ListaRoutingModule
    ],
    declarations: [
        ListaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListaModule { }