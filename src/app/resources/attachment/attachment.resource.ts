import { AxiosResponse } from "axios";
import { BaseResource } from "../../base/base-resource";
import { AttachmentDTO } from "./attachment.dto";

export class AttachmentResource extends BaseResource {
    protected override jsonApi: string = 'attachments';
    public override bindData = (data: any): AttachmentDTO => new AttachmentDTO(data);

    public upload(files: FileList): Promise<AttachmentDTO[]> {
        const formData = new FormData();

        for (let index = 0; index < files.length; index++) {
            const file: File = files[index];
            formData.append(`files[${index}]`, new Blob([file], { type: file.type }), file.name);
        }

        return this.post(formData, 'upload').then(
            (response: AxiosResponse) => response.data.data?.map((item: any) => this.bindData(item))
        );
    }
}
