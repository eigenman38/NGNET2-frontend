import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  states: string[] = ["Colorado", "Pennsylvania", "Florida", "Texas"];

  reactiveForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required, Validators.minLength(5)]], // Validators.minLength(5)
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.pattern(/^\d{5}/)]] // match exactly 5 digits Validators.pattern(/^\d{5}/)
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])


  });


  get aliases() {
    return this.reactiveForm.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

}
