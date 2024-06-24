import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { TestResolutionListComponent } from "./test-resolution-list/test-resolution.list.component";
import { TestResolutionFormComponent } from "./test-resolution-form/test-resolution.form.component";
import { DropzoneModule } from "../../../components/dropzone-component/dropzone.module";

const routes: Routes = [
    { path: "", component: TestResolutionListComponent },
    { path: "criar", component: TestResolutionFormComponent },
    { path: ":id/editar", component: TestResolutionFormComponent },
];

@NgModule({
    declarations: [
        TestResolutionListComponent,
        TestResolutionFormComponent,
    ],
    exports: [
        RouterModule,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        AngularSvgIconModule.forRoot(),
        DropzoneModule,
    ],
})
export class TestResolutionModule {}

