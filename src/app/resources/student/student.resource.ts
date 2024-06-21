import { BaseResource } from "../../base/base-resource";
import { StudentDTO } from "./student.dto";

export class StudentResource extends BaseResource {
    protected override jsonApi: string = 'students';
    public override bindData = (data: any): StudentDTO => new StudentDTO(data);
}
