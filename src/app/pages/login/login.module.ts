import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: "", component: LoginComponent}
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent],
    exports: [RouterModule],
})
export class LoginModule {}
