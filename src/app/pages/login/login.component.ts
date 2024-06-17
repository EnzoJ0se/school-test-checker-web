import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginResource } from "../../resources/login-resource";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    @ViewChild(NgForm) public ngForm: NgForm | null = null;

    public login: string | null = null;
    public password: string | null = null;
    private loginResource: LoginResource = new LoginResource();

    public constructor(private router: Router, private title: Title) {
        title.setTitle('Login');
    }

    public attemptLogin(): void {
        if (!this.ngForm?.valid || !this.login || !this.password) {
            alert();
            return;
        }

        this.loginResource.login(this.login, this.password).then((response) => {
            if (response.status == 200) {
                this.router.navigate(['home']);
            }
        });
    }
}
