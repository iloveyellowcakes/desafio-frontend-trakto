import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading: boolean = false
  error: boolean = false

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login() {
    const data = this.loginForm.getRawValue();
    this.isLoading = true

    this.authService.login(data)
      .pipe(
        finalize(() => {
          this.isLoading = false
          setTimeout(() => {
            this.error = false
          }, 2000);
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['home'])
        },
        error: (err) => {
          this.error = true
        },
      });
  }
}
