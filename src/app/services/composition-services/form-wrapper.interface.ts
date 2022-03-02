import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormWrapperInterface {
    myform: FormGroup;
    errors: string[];
    save(form: FormGroup): boolean;
}

export const FORM_WRAPPER_INTERFACE = new InjectionToken<FormWrapperInterface>('Form Wrapper Interface');
