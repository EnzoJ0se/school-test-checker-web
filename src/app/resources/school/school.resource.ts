import { BaseResource } from "../../base/base-resource";
import { ResourceFilter } from "../../base/base-resource-types";
import { SchoolDTO } from "./school.dto";

export class SchoolResource extends BaseResource {
    protected override jsonApi: string = 'schools';

    public override bindData(data: any): SchoolDTO {
        return new SchoolDTO(data);
    }
}
