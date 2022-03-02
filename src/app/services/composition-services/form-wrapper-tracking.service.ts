import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormWrapperInterface } from './form-wrapper.interface';


@Injectable({ providedIn: 'root' })
export class FormWrapperTrackingService implements FormWrapperInterface {
    public myform: FormGroup = this.fb.group({
        tracker: ['', [Validators.required]],
    });

    public get errors(): string[] {
        return ['different', 'stuff'];
    }

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }
    save(form: FormGroup): boolean {

        console.log(`FormWrapperTrackingService: Save`);
        return true;
    }
}
