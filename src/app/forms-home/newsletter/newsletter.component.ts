import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormWrapperService } from 'src/app/services/composition-services/form-wrapper.service';
import { FormWrapper, FORM_WRAPPER } from '../../services/composition-services/form-wrapper.interface'


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  providers: [
    {
      provide: FORM_WRAPPER,
      useClass: FormWrapperService,
    },
  ],
})
export class NewsletterComponent {
  myform: FormGroup;
  errors: string[] = [];
  constructor(@Inject(FORM_WRAPPER) private formWrapper: FormWrapper) {
    this.myform = formWrapper.myform;
  }
  save() {
    if (!this.formWrapper.save(this.myform)) {
      this.errors = this.formWrapper.errors;
    }
  }
}
