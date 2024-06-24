import { BaseDTO } from "../../base/base-dto";
import { TestQuestionOptionDTO } from "../test-question-option/test-question-option.dto";

export class TestQuestionDTO extends BaseDTO {
    public id: number | null = null;
    public test_id: number | null = null;

    public identifier: string | null = null;
    public caption: string | null = null;
    public description: string | null = null;
    public grade_credit: number | null = null;
    public test_question_options: TestQuestionOptionDTO[] = [];

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.test_id = data.test_id || null;
            this.identifier = data.identifier || null;
            this.caption = data.caption || null;
            this.description = data.description || null;
            this.grade_credit = data.grade_credit || null;
            this.test_question_options = data?.testQuestionOptions?.map((option: any) => new TestQuestionOptionDTO(option)) || [];
        }
    }
}
