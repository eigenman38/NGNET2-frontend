import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormWrapperBase } from 'src/app/services/composition-services/form-wrapper-base.service';
import { FormWrapperService } from 'src/app/services/composition-services/form-wrapper.service';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  providers: [
    {
      provide: FormWrapperBase,
      useClass: FormWrapperService,
    },
  ],
})
export class NewsletterComponent {
  myform: FormGroup;
  errors: string[] = [];
  constructor(private formWrapper: FormWrapperBase) {
    this.myform = formWrapper.myform;
  }
  save() {
    if (!this.formWrapper.save(this.myform)) {
      this.errors = this.formWrapper.errors;
    }
  }
}
