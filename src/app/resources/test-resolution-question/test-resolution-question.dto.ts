import { BaseDTO } from "../../base/base-dto";

export class TestResolutionQuestionDTO extends BaseDTO {
    public id: number | null = null;
    public test_resolution_id: number | null = null;
    public test_question_id: number | null = null;
    public answer: string | null = null;

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.test_resolution_id = data.test_resolution_id || null;
            this.test_question_id = data.test_question_id || null;
            this.answer = data.answer;
        }
    }
}
