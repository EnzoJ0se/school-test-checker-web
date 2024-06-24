import { Component, Input } from "@angular/core";
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
export class TestQuestionsFormComponent {
    @Input() public testDTO: TestDTO = new TestDTO();

    public addQuestion(): void {
        if (!this.testDTO?.test_questions?.length) {
            this.testDTO.test_questions = [];
        }

        this.testDTO.test_questions.push(new TestQuestionDTO({
            identifier: this.testDTO.test_questions.length + 1,
        }));
    }

    public removeQuestion(index: number): void {
        this.testDTO.test_questions.splice(index, 1);
        this.testDTO.test_questions?.forEach((question, index) => question.identifier = index + 1);
    }
}
