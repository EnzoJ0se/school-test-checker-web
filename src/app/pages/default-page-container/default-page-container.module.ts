import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DefaultPageContainerComponent } from "./default-page-container.component";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultPageContainerComponent
    }
];
@NgModule({
    declarations: [DefaultPageContainerComponent],
    exports: [RouterModule],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
})
export class DefaultPageContainerModule { }
