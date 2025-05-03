import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gitHovered = false;
  mailHovered = false;
  linkedinHovered = false;

  isSmallScreen = false;
  currentLanguage: string = 'en';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public languageService: LanguageService,
    private router: Router
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 783;
    }

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }
  
  navigateToHome() {
    this.router.navigate(['/']);
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 783;
    }
  }
}