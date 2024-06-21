import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { CourseListComponent } from "./course-list/course.list.component";
import { CourseFormComponent } from "./course-form/course.form.component";

const routes: Routes = [
    { path: "", component: CourseListComponent },
    { path: "criar", component: CourseFormComponent },
    { path: ":id/editar", component: CourseFormComponent },
];

@NgModule({
    declarations: [
        CourseListComponent,
        CourseFormComponent,
    ],
    exports: [
        RouterModule
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        AngularSvgIconModule.forRoot()
    ],
})
export class CourseModule { }
