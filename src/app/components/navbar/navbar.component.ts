import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {
  @Output() close = new EventEmitter<void>();

  activeLink: string = '';
  isScrolled = false;
  isMobileNavOpen = false;
  currentLanguage: string = 'en';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav() {
    this.close.emit();
  }

  switchLanguage(lang: 'en' | 'de') {
    this.languageService.setLanguage(lang);
    this.closeMobileNav();
  }


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.checkScroll, true);
    }
  }


  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.activeLink = '';
    }
  }


  checkScroll = () => {
    this.isScrolled = window.scrollY > 750;
  };


  setActiveLink(link: string) {
    this.activeLink = link;
  }

  
  scrollTo(section: string, event: MouseEvent) {
    event.preventDefault();
    this.activeLink = section;
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMobileNav();
  }
} 
