import { Component, ElementRef, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ComponentBase } from '../component-base';
import { TemplateFormModel } from '../models/template-form-model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent extends ComponentBase implements OnInit {

  readonly states: string[] = ["Colorado", "Pennsylvania", "Florida", "Texas"];

  model: TemplateFormModel = { address: { state: "" }, aliases: [{ name: '' }] };
  alias: string = '';

  constructor(protected elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${this.selector}`);

  }

  addAlias() {
    this.model.aliases.push({ name: '' });

  }

  patchInValues() {
    this.model = {
      ...this.model,
      firstName: 'Patch in First Name(Joe)',
      lastName: 'Patch in First Last Name(Franklin)',

      address: {
        street: '111 One Way To Go Place',
        state: 1,
        zipcode: 12345
      }
    };
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  onSubmit() {
    console.log(`Template Form Submitted: ${JSON.stringify(this.model)}`);

  }

}
