import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isLoggedIn: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Проверяем фейковые данные
      if (this.loginForm.value.username === 'Admin' && this.loginForm.value.password === '12345') {
        this.isLoggedIn = true;
        this.router.navigate(['/profile']);
      } else {
        alert('Ніверний логін або пароль');
      }
    }
  }

}
