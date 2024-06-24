import { Component } from "@angular/core";
import { TestDTO } from "../../../../resources/test/test.dto";
import { CourseResource } from "../../../../resources/course/course.resource";
import { TestResource } from "../../../../resources/test/test.resource";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "test-list",
    templateUrl: "./test.list.component.html",
})
export class TestListComponent {
    public loading: boolean = false;
    public tests: TestDTO[] = [];
    public testResource: TestResource = new TestResource();

    public constructor(private title: Title) {
        title.setTitle('avaliacoes');
        this.refreshTable();
    }

    public delete(test: TestDTO): void {
        if (test.id) {
            this.testResource.deleteWithConfirmation(test.id);
            this.refreshTable();
        }
    }

    private refreshTable(): void {
        this.loading = true;
        this.testResource.get()
            .then((response) => this.tests = response)
            .finally(() => this.loading = false);
    }
}
