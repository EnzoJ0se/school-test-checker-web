import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { AttachmentDTO } from "../../resources/attachment/attachment.dto";
import { AttachmentResource } from "../../resources/attachment/attachment.resource";

@Component({
    selector: "dropzone",
    templateUrl: "./dropzone.component.html",
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: NgForm
        }
    ],
})
export class DropzoneComponent {
    @Output() public attachmentsChange: EventEmitter<AttachmentDTO[]> = new EventEmitter();
    @Input() public attachments: AttachmentDTO[] = [];

    public files: FileList;
    private attachmentResource: AttachmentResource = new AttachmentResource();

    public onUploadFiles(event: any): void {
        this.attachmentResource.upload(event.target.files).then((attachments: AttachmentDTO[]) => {
            this.attachments.push(...attachments);
            this.attachmentsChange.emit(this.attachments);
        });
    }
}
