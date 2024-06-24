import { BaseDTO } from "../../base/base-dto"
import { CourseDTO } from "../course/course.dto";
import { TestQuestionDTO } from "../test-question/test-question.dto";

export class TestDTO extends BaseDTO {
    public id: number | null = null;
    public course_id: number | null = null;
    public name: string | null = null;
    public grade: number | null = null;

    public test_questions: any[] = [];
    public course: CourseDTO | null = null;

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.course_id = data.course_id || null;
            this.name = data.name || null;
            this.grade = data.grade || null;
            this.course = data.course ? new CourseDTO(data.course) : null;
            this.test_questions = data?.testQuestions?.map((item: any) => new TestQuestionDTO(item)) || [];
        }
    }
}

