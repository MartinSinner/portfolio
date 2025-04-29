import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { LanguageService } from '../../services/language.service';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {
  isOverlayOpen = false;
  enableHover = true;

  emailHovered = false;
  githubHovered = false;
  linkedinHovered = false;

  arrowHovered = false;
  logoHovered = false;

  shapeHovered = false;
  profilePicture = 'assets/img/breit.png';

  currentLanguage: string = 'en';


  constructor(@Inject(PLATFORM_ID) private platformId: Object, public languageService: LanguageService) { }


  ngOnInit() {
    this.updateSettings();

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }


  @HostListener('window:resize', [])
  onResize() {
    this.updateSettings();
  }

  updateSettings() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 783) {
        this.profilePicture = 'assets/img/breit2.png';
        this.enableHover = false;
      } else {
        this.profilePicture = 'assets/img/breit.png';
        this.enableHover = true;
      }
    }
  }

  toggleOverlay() {
    this.isOverlayOpen = !this.isOverlayOpen;
  }
}
