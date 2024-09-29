import { AfterViewInit, ChangeDetectorRef, Component, Input } from "@angular/core";
import { TestDTO } from "../../../../../resources/test/test.dto";
import { ControlContainer, NgForm } from "@angular/forms";
import { TestQuestionDTO } from "../../../../../resources/test-question/test-question.dto";
import { TestQuestionOptionDTO } from "../../../../../resources/test-question-option/test-question-option.dto";
import { uuid } from "../../../../../helper/form-helpers";

@Component({
    selector: "test-questions-form",
    templateUrl: "./test-questions.form.component.html",
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: NgForm
        }
    ],
})
export class TestQuestionsFormComponent implements AfterViewInit {
    @Input() public testDTO: TestDTO = new TestDTO();

    public openIndex: number | null = 0;

    public constructor(private changeDetector: ChangeDetectorRef) {}

    public ngAfterViewInit(): void {
        if (!this.testDTO.test_questions?.length) {
            this.addQuestion();
        }
    }

    public addQuestion(): void {
        if (!this.testDTO?.test_questions?.length) {
            this.testDTO.test_questions = [];
        }

        this.testDTO.test_questions.push(new TestQuestionDTO({ identifier: this.testDTO.test_questions.length + 1 }));
        this.openIndex = this.testDTO.test_questions.length - 1;
        this.changeDetector.detectChanges();
    }

    public removeQuestion(index: number): void {
        this.testDTO.test_questions.splice(index, 1);
        this.testDTO.test_questions?.forEach((question, index) => question.identifier = index + 1);
    }
}
