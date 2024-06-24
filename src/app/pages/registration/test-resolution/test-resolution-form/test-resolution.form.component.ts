import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { resourceSelectCompareFn } from "../../../../helper/form-helpers";
import { TestResolutionDTO } from "../../../../resources/test-resolution/test-resolution.dto";
import { StudentDTO } from "../../../../resources/student/student.dto";
import { TestDTO } from "../../../../resources/test/test.dto";
import { StudentResource } from "../../../../resources/student/student.resource";
import { TestResolutionResource } from "../../../../resources/test-resolution/test-resolution.resource";
import { TestResource } from "../../../../resources/test/test.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AttachmentDTO } from "../../../../resources/attachment/attachment.dto";

@Component({
    selector: "test-resolution-form",
    templateUrl: "./test-resolution.form.component.html",
})
export class TestResolutionFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public selectCompareFn = resourceSelectCompareFn;
    public testResolutionDTO: TestResolutionDTO = new TestResolutionDTO();
    public students: StudentDTO[] = [];
    public tests: TestDTO[] = [];

    private testResolutionResource: TestResolutionResource = new TestResolutionResource();
    private studentResource: StudentResource = new StudentResource();
    private testResource: TestResource = new TestResource();

    public constructor(
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
    ) {
        title.setTitle('Criar / Editar Correção');
    }

    public ngOnInit(): void {
        const { id } = this.route.snapshot.params;

        if (id) {
            this.testResolutionResource.find(id).then((testResolution: TestResolutionDTO) => {
                this.testResolutionDTO = testResolution;
            });
        }

        this.studentResource.get().then((response: StudentDTO[]) => this.students = response);
        this.testResource.get().then((response: TestDTO[]) => this.tests = response);
    }


    public onUpdateAttachments(attachments: AttachmentDTO[]): void {
        this.testResolutionDTO.attachments = attachments;
        this.testResolutionDTO.attachment_ids = <number[]>attachments.map((attachment) => attachment.id);
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('Preencha todos os campos corretamente');
            return;
        }

        this.testResolutionResource.save(this.testResolutionDTO).then(() => {
            alert('Correção salva com sucesso');
            this.router.navigate(['/correcoes']);
        });
    }
}
