import { Component, OnInit, ViewChild } from "@angular/core";
import { SchoolDTO } from "../../../../resources/school/school.dto";
import { ActivatedRoute, Router } from "@angular/router";
import { SchoolResource } from "../../../../resources/school/school.resource";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-school-form",
    templateUrl: "./school.form.component.html",
})
export class SchoolFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public schoolDTO: SchoolDTO = new SchoolDTO();
    private schoolResource: SchoolResource = new SchoolResource();

    public constructor(
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
    ) {
        title.setTitle('Criar / Editar Escola');
    }

    public ngOnInit(): void {
        const { id } = this.route.snapshot.params;

        if (id) {
            this.schoolResource.find(id).then((school: SchoolDTO) => this.schoolDTO = school);
        }
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('Preencha todos os campos corretamente');
            return;
        }

        this.schoolResource.save(this.schoolDTO).then(() => {
            alert('Escola salva com sucesso');
            this.router.navigate(['/escolas']);
        });
    }
}
