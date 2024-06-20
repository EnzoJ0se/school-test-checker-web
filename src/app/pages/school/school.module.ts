import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { SchoolListComponent } from "./school-list/school-list.component";
import { SchoolFormComponent } from "./school-form/school.form.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
    { path: "", component: SchoolListComponent },
    { path: "criar", component: SchoolFormComponent },
    { path: ":id/editar", component: SchoolFormComponent },
];

@NgModule({
    declarations: [
        SchoolListComponent,
        SchoolFormComponent,
    ],
    exports: [
        RouterModule,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        AngularSvgIconModule.forRoot()
    ],
})
export class SchoolModule { }
