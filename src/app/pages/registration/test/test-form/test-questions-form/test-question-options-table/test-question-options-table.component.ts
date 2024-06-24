import { Component, Input } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { TestQuestionDTO } from "../../../../../../resources/test-question/test-question.dto";
import { uuid } from "../../../../../../helper/form-helpers";
import { TestQuestionOptionDTO } from "../../../../../../resources/test-question-option/test-question-option.dto";

@Component({
    selector: "test-question-options-table",
    templateUrl: "./test-question-options-table.component.html",
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: NgForm
        }
    ],
})
export class TestQuestionOptionsTableComponent {
    @Input() public testQuestionDTO: TestQuestionDTO = new TestQuestionDTO();

    public uuid: string = uuid();

    public questionOptions: string[] = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ];

    public addQuestionOption(question: TestQuestionDTO): void {
        if (!question?.test_question_options?.length) {
            question.test_question_options = [];
        }

        question?.test_question_options.push(new TestQuestionOptionDTO());
    }

    public removeQuestionOption(question: TestQuestionDTO, index: number): void {
        question?.test_question_options.splice(index, 1);
    }
}
