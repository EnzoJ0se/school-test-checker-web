import { BaseDTO } from "../../base/base-dto";
import { TestQuestionDTO } from "../test-question/test-question.dto";

export class TestResolutionQuestionDTO extends BaseDTO {
    public id: number | null = null;
    public test_resolution_id: number | null = null;
    public test_question_id: number | null = null;
    public answer: string | null = null;
    public is_correct: boolean | null = null;
    public extracted_text: string | null = null;
    public test_question: TestQuestionDTO | null = null;

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.test_resolution_id = data.test_resolution_id || null;
            this.test_question_id = data.test_question_id || null;
            this.answer = data.answer;
            this.is_correct = data.is_correct;
            this.extracted_text = data.extracted_text;
            this.test_question = data.testQuestion ? new TestQuestionDTO(data.testQuestion) : null;
        }
    }
}
