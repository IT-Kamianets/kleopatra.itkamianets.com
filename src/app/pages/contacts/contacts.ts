import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts implements AfterViewInit {
  form: FormGroup;
  submitted = false;
  success = false;

  contactInfo = [
    {
      icon: '📍',
      title: 'Адреса',
      lines: ['вул. Татарська, 19', 'Кам\'янець-Подільський, 32300']
    },
    {
      icon: '📞',
      title: 'Телефон',
      lines: ['+38(03849)9-16-52', '+38(067)380-54-04 (Viber)']
    },
    {
      icon: '✉️',
      title: 'Email',
      lines: ['kleopatrakp19@gmail.com']
    },
    {
      icon: '🕐',
      title: 'Рецепція',
      lines: ['24/7 — цілодобово']
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['booking'],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      // Simulate success
      this.success = true;
      this.form.reset();
      this.submitted = false;
    }
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched || this.submitted));
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.opacity-0-init').forEach(el => observer.observe(el));
  }
}
