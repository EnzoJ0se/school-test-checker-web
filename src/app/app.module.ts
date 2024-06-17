import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { LoginModule } from "./pages/login/login.module";
import { HomeModule } from "./pages/home/home.module";
import { DefaultPageContainerModule } from "./pages/default-page-container/default-page-container.module";

@NgModule({
    imports: [
        BrowserModule,
        RouterOutlet,
        CommonModule,
        AppRoutingModule,
        // LoginModule,
        // HomeModule,
        DefaultPageContainerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
