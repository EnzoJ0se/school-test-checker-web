import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../environment/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public title = 'school-test-checker-web';

    public async login() {
        await axios.get(`${environment.apiUrl}/sanctum/csrf-cookie`);
        await axios.post(`${environment.apiUrl}/login`, {
            login: 'enzo',
            password: 'teste'
        });
    }
}
