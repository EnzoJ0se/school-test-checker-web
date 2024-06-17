import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { SchoolListComponent } from "./school-list/school-list.component";

const routes: Routes = [
    { path: "", component: SchoolListComponent }
];

@NgModule({
    declarations: [
        SchoolListComponent
    ],
    exports: [
        RouterModule,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export class SchoolModule { }
