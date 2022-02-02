import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required], // Validators.minLength(5)
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zipcode: [''] // match exactly 5 digits Validators.pattern(/^\d{5}/)
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
      address: {
        street: '12345 Patched in Street',
        zip: 12345
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
