import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { resourceSelectCompareFn } from "../../../../helper/form-helpers";
import { TestDTO } from "../../../../resources/test/test.dto";
import { CourseDTO } from "../../../../resources/course/course.dto";
import { TestResource } from "../../../../resources/test/test.resource";
import { CourseResource } from "../../../../resources/course/course.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { TestQuestionDTO } from "../../../../resources/test-question/test-question.dto";
import { TestQuestionOptionDTO } from "../../../../resources/test-question-option/test-question-option.dto";

@Component({
    selector: "test-form",
    templateUrl: "./test.form.component.html",
})
export class TestFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public selectCompareFn = resourceSelectCompareFn;
    public testDTO: TestDTO = new TestDTO();
    public courses: CourseDTO[] = [];

    private testResource: TestResource = new TestResource();
    private courseResource: CourseResource = new CourseResource();

    public constructor(
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
    ) {
        title.setTitle('Criar / Editar Avaliação');
    }

    public ngOnInit(): void {
        const { id } = this.route.snapshot.params;

        if (id) {
            this.testResource.find(id).then((test: TestDTO) => this.testDTO = test);
        }

        this.courseResource.get().then((response: CourseDTO[]) => this.courses = response);
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('Preencha todos os campos corretamente');
            return;
        }

        this.testResource.save(this.testDTO).then(() => {
            alert('Aluno salva com sucesso');
            this.router.navigate(['/avaliacoes']);
        });
    }
}
