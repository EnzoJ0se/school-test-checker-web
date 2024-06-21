import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { resourceSelectCompareFn } from "../../../../helper/form-helpers";
import { StudentDTO } from "../../../../resources/student/student.dto";
import { CourseDTO } from "../../../../resources/course/course.dto";
import { CourseResource } from "../../../../resources/course/course.resource";
import { StudentResource } from "../../../../resources/student/student.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'student-form',
    templateUrl: './student.form.component.html',
})
export class StudentFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public selectCompareFn = resourceSelectCompareFn;
    public studentDTO: StudentDTO = new StudentDTO();
    public courses: CourseDTO[] = [];

    private studentResource: StudentResource = new StudentResource();
    private courseResource: CourseResource = new CourseResource();

    public constructor(
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
    ) {
        title.setTitle('Criar / Editar Aluno');
    }

    public ngOnInit(): void {
        const { id } = this.route.snapshot.params;

        if (id) {
            this.studentResource.find(id).then((student: StudentDTO) => {
                this.studentDTO = student;
            });
        }

        this.courseResource.get().then((response: CourseDTO[]) => this.courses = response);
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('Preencha todos os campos corretamente');
            return;
        }

        this.studentResource.save(this.studentDTO).then(() => {
            alert('Aluno salva com sucesso');
            this.router.navigate(['/alunos']);
        });
    }
}
