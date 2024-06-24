import { BaseResource } from "../../base/base-resource";
import { TestResolutionDTO } from "./test-resolution.dto";

export class TestResolutionResource extends BaseResource {
    protected override jsonApi: string = 'test-resolutions';
    public override bindData = (data: any): TestResolutionDTO => new TestResolutionDTO(data);
}
