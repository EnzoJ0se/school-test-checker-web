import { AxiosResponse } from "axios";
import { BaseResource } from "../base/base-resource";
import { BaseDTO } from "../base/base-dto";

export class LoginResource extends BaseResource {
    public async login(login: string, password: string): Promise<AxiosResponse> {
        this.getToken();

        return this.post({ login, password }, 'login');
    }

    public override bindData(data: any): BaseDTO {
        return new BaseDTO(data);
    }
}
