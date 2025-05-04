import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent {
  buttonHover = false;
  currentLanguage: string = 'en';

  constructor(public languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }

  scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
