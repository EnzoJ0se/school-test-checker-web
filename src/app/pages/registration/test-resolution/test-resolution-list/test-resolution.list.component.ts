import { Component } from "@angular/core";
import { TestResolutionDTO } from "../../../../resources/test-resolution/test-resolution.dto";
import { TestResolutionResource } from "../../../../resources/test-resolution/test-resolution.resource";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "test-resolution-list",
    templateUrl: "./test-resolution.list.component.html",
})
export class TestResolutionListComponent {
    public loading: boolean = false;
    public testResolutions: TestResolutionDTO[] = [];
    public testResolutionResource: TestResolutionResource = new TestResolutionResource();

    public constructor(private title: Title) {
        title.setTitle('Correções');
        this.refreshTable();
    }

    public delete(testResolutions: TestResolutionDTO): void {
        if (testResolutions.id) {
            this.testResolutionResource.deleteWithConfirmation(testResolutions.id);
            this.refreshTable();
        }
    }

    private refreshTable(): void {
        this.loading = true;
        this.testResolutionResource.get()
            .then((response) => this.testResolutions = response)
            .finally(() => this.loading = false);
    }
}
