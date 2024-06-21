import { BaseDTO } from "../../base/base-dto";
import { SchoolDTO } from "../school/school.dto";

export class CourseDTO extends BaseDTO {
    public id: number | null = null;
    public name: string | null = null;
    public school_id: number | null = null;
    public school: SchoolDTO | null = null;

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.name = data.name || null;
            this.school_id = data.school_id || null;
            this.school = data.school ? new SchoolDTO(data.school) : null;
        }
    }
}
