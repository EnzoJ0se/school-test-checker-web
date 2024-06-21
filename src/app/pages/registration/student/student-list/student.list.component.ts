import { Component } from "@angular/core";
import { StudentDTO } from "../../../../resources/student/student.dto";
import { StudentResource } from "../../../../resources/student/student.resource";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'student-list',
    templateUrl: './student.list.component.html',
})
export class StudentListComponent {
    public loading: boolean = false;
    public students: StudentDTO[] = [];
    public studentResource: StudentResource = new StudentResource();

    public constructor(private title: Title) {
        title.setTitle('Alunos');
        this.refreshTable();
    }

    public delete(students: StudentDTO): void {
        if (students.id) {
            this.studentResource.deleteWithConfirmation(students.id);
            this.refreshTable();
        }
    }

    private refreshTable(): void {
        this.loading = true;
        this.studentResource.get()
            .then((response) => this.students = response)
            .finally(() => this.loading = false);
    }
}
