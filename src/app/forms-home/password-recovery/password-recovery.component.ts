import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormWrapperTrackingService } from 'src/app/services/composition-services/form-wrapper-tracking.service';
import { FormWrapperInterface, FORM_WRAPPER_INTERFACE } from 'src/app/services/composition-services/form-wrapper.interface';


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css'],
  providers: [
    {
      provide: FORM_WRAPPER_INTERFACE,
      useClass: FormWrapperTrackingService,
    },
  ],
})
export class PasswordRecoveryComponent {
  myform: FormGroup;
  errors: string[] = [];
  constructor(@Inject(FORM_WRAPPER_INTERFACE) private formWrapper: FormWrapperInterface) {
    this.myform = formWrapper.myform;
  }
  save() {
    if (!this.formWrapper.save(this.myform)) {
      this.errors = this.formWrapper.errors;
    }
  }
}
