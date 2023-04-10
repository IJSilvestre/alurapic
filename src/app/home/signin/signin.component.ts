import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/pataform-detector/plataform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formUser = inject(FormBuilder).group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  @ViewChild('userNameInput') userNameInput:
    | ElementRef<HTMLInputElement>
    | undefined;

  constructor(
    private autyService: AuthService,
    private router: Router,
    private platformDetectorService: PlataformDetectorService
  ) {}

  ngOnInit() {}

  onSubmit() {
    const userName = this.formUser.get('userName')?.value ?? ``;
    const password = this.formUser.get('password')?.value ?? ``;
    this.autyService.authenticate(userName, password).subscribe({
      next: (vlr) => {
        this.router.navigate(['user', userName]);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
        this.formUser.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput?.nativeElement.focus();
      },
    });
  }

  fieldValidTouched(field: string) {
    return this.formUser.get(field)?.touched && this.formUser.get(field)?.valid;
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
    return this.validateField(field);
  }
}
