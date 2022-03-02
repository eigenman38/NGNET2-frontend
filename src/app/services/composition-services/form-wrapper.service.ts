import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormWrapper } from './form-wrapper.interface';

@Injectable({ providedIn: 'root' })
export class FormWrapperService implements FormWrapper {
    public myform: FormGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    });

    public get errors(): string[] {

        return ['some', 'stuff'];
    }

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }
    save(form: FormGroup): boolean {

        return false;

    }
}
