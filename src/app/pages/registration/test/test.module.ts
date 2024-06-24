import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { TestFormComponent } from "./test-form/test.form.component";
import { TestListComponent } from "./test-list/test.list.component";
import { TestQuestionsFormComponent } from "./test-form/test-questions-form/test-questions.form.component";
import { TestQuestionOptionsTableComponent } from "./test-form/test-questions-form/test-question-options-table/test-question-options-table.component";

const routes: Routes = [
    { path: "", component: TestListComponent },
    { path: "criar", component: TestFormComponent },
    { path: ":id/editar", component: TestFormComponent },
];

@NgModule({
    declarations: [
        TestFormComponent,
        TestListComponent,
        TestQuestionsFormComponent,
        TestQuestionOptionsTableComponent,
    ],
    exports: [
        RouterModule,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        AngularSvgIconModule.forRoot()
    ],
})
export class TestModule { }
