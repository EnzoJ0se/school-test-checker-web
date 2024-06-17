import { BaseDTO } from "../../base/base-dto";

export class SchoolDTO extends BaseDTO {
    public id: number | null = null;
    public user_id: number | null = null;
    public name: string | null = null;
    public inep_code: string | null = null;

    public constructor(data?: any) {
        super(data);

        this.id = data?.id || null;
        this.user_id = data?.user_id || null;
        this.name = data?.name || null;
        this.inep_code = data?.inep_code || null;
    }
}
