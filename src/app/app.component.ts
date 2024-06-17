import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public title = 'school-test-checker-web';

    public constructor() {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
    }
}
