import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectCardComponent } from './components/portfolio/project-card/project-card.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboveTheFoldComponent,
    NavbarComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ProjectCardComponent,
    ReferenceComponent,
    ContactComponent,
    FooterComponent,
    CommonModule
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  isOverlayOpen = false;

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  isLegalOrPrivacy(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/legal-notice' || currentRoute === '/privacy-policy';
  }

  toggleOverlay() {
    this.isOverlayOpen = !this.isOverlayOpen;
  }

}
