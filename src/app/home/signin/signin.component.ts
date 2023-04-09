import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formUser = inject(FormBuilder).group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.formUser.get('password')?.value);
  }

  fieldValidTouched(field: string) {
    return (
      this.formUser.get(field)?.touched && this.formUser.get(field)?.valid
    );
  }

  fieldInvalidTouched(field: string) {
    return (
      this.formUser.get(field)?.touched && !this.formUser.get(field)?.valid
    );
  }

  validateField(field: string) {
    return {
      'is-invalid': this.fieldInvalidTouched(field),
      'is-valid': this.fieldValidTouched(field),
    };
  }

  addCss(field: string) {
    console.log(this.validateField(field));
    return this.validateField(field);
  }
}
