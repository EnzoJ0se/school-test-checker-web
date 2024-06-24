import { BaseDTO } from "../../base/base-dto";

export class TestQuestionOptionDTO extends BaseDTO {
    public id: number | null = null;
    public test_question_id: number | null = null;
    public identifier: string | null = null;
    public description: string | null = null;
    public is_correct: boolean | null = null;

    public constructor(data?: any) {
        super();

        if(data) {
            this.id = data.id || null;
            this.test_question_id = data.test_question_id || null;
            this.identifier = data.identifier || null;
            this.description = data.description || null;
            this.is_correct = data.is_correct
        }
    }
}
