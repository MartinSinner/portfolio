import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  currentLanguage: string = 'en';

 constructor(@Inject(PLATFORM_ID) private platformId: Object, public languageService: LanguageService) {

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }
}
