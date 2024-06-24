import { BaseDTO } from "../../base/base-dto";

export class AttachmentDTO extends BaseDTO {
    public id: number | null = null;
    public original_file_name: string | null = null;
    public original_file_type: string | null = null;
    public original_file_size: number | null = null;
    public file_path: string | null = null;

    public constructor(data?: any) {
        super();

        if (data) {
            this.id = data.id || null;
            this.original_file_name = data.original_file_name || null;
            this.original_file_type = data.original_file_type || null;
            this.original_file_size = data.original_file_size || null;
            this.file_path = data.file_path || null;
        }
    }
}
