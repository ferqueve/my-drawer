import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { IngresoComponent } from "./ingreso.component";
import { ListaComponent} from "../lista/lista.component";

const routes: Routes = [
    { path: "", component: IngresoComponent },
    { path: "./lista", component: ListaComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class IngresoRoutingModule { }