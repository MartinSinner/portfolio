import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

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

  ngOnInit() {
    this.updateSettings();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateSettings();
  }

  updateSettings() {
    if (window.innerWidth <= 783) {
      this.profilePicture = 'assets/img/breit2.png';
      this.enableHover = false;
    } else {
      this.profilePicture = 'assets/img/breit.png';
      this.enableHover = true;
    }
  }

  toggleOverlay(){
    this.isOverlayOpen = !this.isOverlayOpen;
  }
}
