import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormWrapperBase } from './form-wrapper-base.service';
import { FormWrapperInterface } from './form-wrapper.interface';

@Injectable({ providedIn: 'root' })
export class FormWrapperService implements FormWrapperBase {
    public myform: FormGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    });

    public get errors(): string[] {

        return ['some', 'stuff'];
    }

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }
    save(form: FormGroup): boolean {

        console.log(`FormWrapperService: Save`);

        return false;

    }
}
