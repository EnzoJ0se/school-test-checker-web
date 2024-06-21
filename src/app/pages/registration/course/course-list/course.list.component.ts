import { Component, OnInit } from "@angular/core";
import { CourseDTO } from "../../../../resources/course/course.dto";
import { CourseResource } from "../../../../resources/course/course.resource";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'course-list',
    templateUrl: './course.list.component.html',
})
export class CourseListComponent {
    public loading: boolean = false;
    public courses: CourseDTO[] = [];
    public courseResource: CourseResource = new CourseResource();

    public constructor(private title: Title) {
        title.setTitle('Salas de aula');
        this.refreshTable();
    }

    public delete(course: CourseDTO): void {
        if (course.id) {
            this.courseResource.deleteWithConfirmation(course.id);
            this.refreshTable();
        }
    }

    private refreshTable(): void {
        this.loading = true;
        this.courseResource.get()
            .then((response) => this.courses = response)
            .finally(() => this.loading = false);
    }
}
