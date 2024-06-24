import { BaseResource } from "../../base/base-resource";
import { TestDTO } from "./test.dto";

export class TestResource extends BaseResource {
    protected override jsonApi: string = 'tests';
    public override bindData = (data: any): TestDTO => new TestDTO(data)
}
