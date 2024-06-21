import { BaseDTO } from "../../base/base-dto";
import { CourseDTO } from "../course/course.dto";

export class StudentDTO extends BaseDTO {
    public id: number | null = null;
    public course_id: number | null = null
    public name: string | null = null;
    public code: string | null = null;
    public course: CourseDTO | null = null;

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.course_id = data.course_id || null;
            this.name = data.name || null;
            this.code = data.code || null;
            this.course = data.course ? new CourseDTO(data.course) : null;
        }
    }
}
