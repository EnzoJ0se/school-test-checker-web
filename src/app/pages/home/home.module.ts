import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: "", component: HomeComponent}
];

@NgModule({
    declarations: [HomeComponent],
    exports: [RouterModule],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
})
export class HomeModule { }
