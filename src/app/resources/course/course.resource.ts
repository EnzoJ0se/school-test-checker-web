import { BaseResource } from "../../base/base-resource";
import { CourseDTO } from "./course.dto";

export class CourseResource extends BaseResource {
    protected override jsonApi: string = 'courses';
    public override bindData = (data: any): CourseDTO => new CourseDTO(data)
}
