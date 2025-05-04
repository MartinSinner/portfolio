import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Component } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeLink: string = '';
  isScrolled = false;
  currentLanguage: string = 'en';


  constructor(@Inject(PLATFORM_ID) private platformId: Object, 
  public languageService: LanguageService
) {

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }

  switchLanguage(lang: 'en' | 'de') {
    this.languageService.setLanguage(lang);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.checkScroll, true);
    }
  }
  

  checkScroll = () => {
    this.isScrolled = window.scrollY > 750; 
  };

  setActiveLink(link : string){
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
  }
} 
