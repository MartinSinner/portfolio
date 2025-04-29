import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  shapeHovered = false;

  isSmallScreen = false;
  isSmallScreenButton = false;

  currentLanguage: string = 'en';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public languageService: LanguageService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 475;
      this.isSmallScreenButton = window.innerWidth <= 783;
    }

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 475;
      this.isSmallScreenButton = window.innerWidth <= 783;
    }
  }
}
