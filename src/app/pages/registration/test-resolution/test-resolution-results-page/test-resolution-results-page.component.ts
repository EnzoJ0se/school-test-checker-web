import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TestResolutionDTO } from "../../../../resources/test-resolution/test-resolution.dto";
import { TestResolutionResource } from "../../../../resources/test-resolution/test-resolution.resource";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "test-resolution-results-page",
    templateUrl: "./test-resolution-results-page.component.html",
})
export class TestResolutionResultsPageComponent  implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public testResolutionDTO: TestResolutionDTO = new TestResolutionDTO();
    private testResolutionResource: TestResolutionResource = new TestResolutionResource();

    public constructor(
        private route: ActivatedRoute,
        private title: Title,
    ) {
        title.setTitle('Visualizar Correção');
    }

    public ngOnInit(): void {
        const { id } = this.route.snapshot.params;

        if (id) {
            this.testResolutionResource.find(id).then((testResolution: TestResolutionDTO) => {
                this.testResolutionDTO = testResolution;
                console.log(testResolution);
            });
        }
    }
}
