import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CourseDTO } from "../../../../resources/course/course.dto";
import { CourseResource } from "../../../../resources/course/course.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { SchoolResource } from "../../../../resources/school/school.resource";
import { SchoolDTO } from "../../../../resources/school/school.dto";
import { resourceSelectCompareFn } from "../../../../helper/form-helpers";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "acourse-form",
    templateUrl: "./course.form.component.html",
})
export class CourseFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public selectCompareFn = resourceSelectCompareFn;
    public courseDTO: CourseDTO = new CourseDTO();
    public schools: SchoolDTO[] = [];

    private courseResource: CourseResource = new CourseResource();
    private schoolResource: SchoolResource = new SchoolResource();

    public constructor(
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
    ) {
        title.setTitle('Criar / Editar Sala de Aula');
    }

    public ngOnInit(): void {
        const { id } = this.route.snapshot.params;

        if (id) {
            this.courseResource.find(id).then((course: CourseDTO) => {
                this.courseDTO = course;
                console.log(this.courseDTO);
            });
        }

        this.schoolResource.get().then((response) => this.schools = response);
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('Preencha todos os campos corretamente');
            return;
        }

        this.courseResource.save(this.courseDTO).then(() => {
            alert('Aula salva com sucesso');
            this.router.navigate(['/salas-de-aula']);
        });
    }
}
