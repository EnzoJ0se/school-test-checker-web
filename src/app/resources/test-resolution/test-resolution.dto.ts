import { BaseDTO } from "../../base/base-dto";
import { AttachmentDTO } from "../attachment/attachment.dto";
import { StudentDTO } from "../student/student.dto";
import { TestResolutionQuestionDTO } from "../test-resolution-question/test-resolution-question.dto";
import { TestDTO } from "../test/test.dto";
import { TestResolutionStatusEnum } from "./test-resolution.enum";

export class TestResolutionDTO extends BaseDTO {
    public id: number | null = null;
    public test_id: number | null = null;
    public user_id: number | null = null;
    public student_id: number | null = null;
    public attachment_ids: number[] |  null = []
    public grade: number | null = null;
    public status: TestResolutionStatusEnum | null = null;

    public student: StudentDTO | null = null;
    public test: TestDTO | null = null;
    public test_resolution_questions: TestResolutionQuestionDTO[] = [];
    public attachments: AttachmentDTO[] = [];

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.test_id = data.test_id || null;
            this.user_id = data.user_id || null;
            this.student_id = data.student_id || null;
            this.grade = data.grade || null;
            this.status = data.status || null;

            this.student = new StudentDTO(data.student);
            this.test = new TestDTO(data.test);
            this.test_resolution_questions = data?.testResolutionQuestions?.map(
                (question: any) => new TestResolutionQuestionDTO(question)
            ) || [];
        }
    }
}
