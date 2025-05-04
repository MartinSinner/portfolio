import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})


export class LegalNoticeComponent {
  currentLanguage: string = 'en';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    public languageService: LanguageService
  ) {

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }
}
