import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { StudentFormComponent } from "./student-form/student.form.component";
import { StudentListComponent } from "./student-list/student.list.component";

const routes: Routes = [
    { path: "", component: StudentListComponent },
    { path: "criar", component: StudentFormComponent },
    { path: ":id/editar", component: StudentFormComponent },
];

@NgModule({
    declarations: [
        StudentFormComponent,
        StudentListComponent,
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
export class StudentModule { }
