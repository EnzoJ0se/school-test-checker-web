import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularSvgIconModule } from "angular-svg-icon";
import { DropzoneComponent } from "./dropzone.component";

@NgModule({
    declarations: [
        DropzoneComponent
    ],
    exports: [
        DropzoneComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot()
    ],
})
export class DropzoneModule { }
