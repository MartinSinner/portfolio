import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<'en' | 'de'>('en');
  currentLanguage$ = this.currentLanguage.asObservable();
  

  private translations = {
    //Hero
    developer: {
      en: 'developer',
      de: 'Entwickler'
    },
    role: {
      en: 'FRONTEND DEVELOPER',
      de: 'FRONTEND ENTWICKLER'
    },
    name: {
      en: 'Martin Sinner',
      de: 'Martin Sinner'
    },
    //Navbar
    whyMe: {
      en: 'Why me',
      de: 'Warum ich'
    },
    skills: {
      en: 'Skills',
      de: 'Fähigkeiten'
    },
    projects: {
      en: 'Projects',
      de: 'Projekte'
    },
    contact: {
      en: 'Contact',
      de: 'Kontakt'
    }
    
    //Why me
    //Skills
    //Projects
    //Reference 
    //Contact
    //Footer
  };

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage.next(lang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  translate(key: keyof typeof this.translations) {
    const lang = this.currentLanguage.value;
    return this.translations[key]?.[lang] || key;
  }
}
