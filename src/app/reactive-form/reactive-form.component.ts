import { Component, ElementRef, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from '../component-base';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent extends ComponentBase implements OnInit {

  readonly states: string[] = ["Colorado", "Pennsylvania", "Florida", "Texas"];

  public reactiveForm = this.formBuilder.group({
    firstName: ['', [Validators.required, this.forbiddenNameValidator(/^bob$/)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]], // Validators.minLength(5)
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.pattern(/^\d{5}$/)]] // match exactly 5 digits Validators.pattern(/^\d{5}/)
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])


  });


  get aliases() {
    return this.reactiveForm.get('aliases') as FormArray;
  }

  constructor(protected elementRef: ElementRef, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    super(elementRef);

  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${this.selector}`);


    this.activatedRoute.queryParamMap.subscribe((params) => {


    });
  }



  patchInValues() {
    this.reactiveForm.patchValue({
      firstName: 'Patch in First Name(Joe)',
      lastName: 'Patch in First Last Name(Franklin)',

      address: {
        street: '111 One Way To Go Place',
        state: 1,
        zipcode: '12345'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));  // adds a control into the aliases control array. Which the ngFor picks up and adds a new input

  }

  onSubmit() {
    console.log(`Reactive Form Submitted: ${JSON.stringify(this.reactiveForm.value)}`);

  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

}
