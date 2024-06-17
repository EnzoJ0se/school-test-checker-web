import { Component } from "@angular/core";
import { SchoolResource } from "../../../resources/school/school.resource";
import { SchoolDTO } from "../../../resources/school/school.dto";

@Component({
    selector: 'school-list',
    templateUrl: './school-list.component.html',
})
export class SchoolListComponent {
    public loading: boolean = false;
    public schools: SchoolDTO[] = [];
    public schoolResource: SchoolResource = new SchoolResource();

    public constructor() {
        this.loading = true;
        this.schoolResource.get()
            .then((response) => this.schools = response)
            .finally(() => this.loading = false);
    }
}