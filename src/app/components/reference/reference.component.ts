import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})


export class ReferenceComponent {
  hoveredIndex: number | null = null;
  currentLanguage: string = 'en';
  activeIndex = 0;

  constructor(public languageService: LanguageService) {

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    })
  }

  setHoveredIndex(index: number | null): void {
    if (window.innerWidth >= 783) {
      this.hoveredIndex = index;
    } else {
      this.hoveredIndex = null;
    }
  }
}
