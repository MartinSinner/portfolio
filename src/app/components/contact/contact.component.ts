import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  isEmailValid = true;
  showSuccess = false;

  showNameError = false;
  showMailError = false;
  showMessageError = false;

  privacyAccepted = false;
  showError = false;
  hover = false;
  hoverPolicy = false;

  isSmallScreen = false;
  currentLanguage: string = 'en';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    public languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 783;
    }
  }


  ngOnInit() {
    this.onResize();
  }


  onHoverPolicy(isHovering: boolean) {
    if (!this.isSmallScreen) {
      this.hoverPolicy = isHovering;
    }
  }


  acceptPrivacy() {
    this.privacyAccepted = !this.privacyAccepted;

    if (this.privacyAccepted) {
      this.showError = false;
    }
  }


  validateEmail() {
    this.isEmailValid = this.emailPattern.test(this.email);
    return this.isEmailValid;
  }


  submitForm() {
    const payload = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    this.http.post('https://portfolio-mail-backend-exd0.onrender.com/send', payload).subscribe({
      next: (response) => {
        this.showSuccess = true;
        this.resetForm();
        setTimeout(() => (this.showSuccess = false), 3000);
      },
      error: (error) => {
        console.error('Error sending:', error);
      },
    });
  }


  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
    this.showError = false;
  }


  onInputChange(field: 'name' | 'email' | 'message') {
    if (field === 'name') this.showNameError = !this.name.trim();
    if (field === 'email') {
      this.showMailError = !this.email.trim() || !this.validateEmail();
    }
    if (field === 'message') this.showMessageError = !this.message.trim();
  }


  isFormValid(): boolean {
    return this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.validateEmail() &&
      this.message.trim() !== '' &&
      this.privacyAccepted;
  }

  
  scrollToTop() {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

