import { FormGroup } from "@angular/forms";

export abstract class FormWrapperBase {
    abstract myform: FormGroup;
    abstract errors: string[];
    abstract save(form: FormGroup): boolean;
}