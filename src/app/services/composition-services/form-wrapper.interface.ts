import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormWrapper {
    myform: FormGroup;
    errors: string[];
    save(form: FormGroup): boolean;
}

export const FORM_WRAPPER = new InjectionToken<FormWrapper>('Form Wrapper');
