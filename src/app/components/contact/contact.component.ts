import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';


  showNameError = false;
  showMailError = false;
  showMessageError = false;

  privacyAccepted = false;
  showError = false;
  hover = false;
  hoverPolicy = false;

  isSmallScreen = false;
  

  @HostListener('window:resize', ['$event'])
  onResize() {
      this.isSmallScreen = window.innerWidth <= 783;
  }

  ngOnInit() {
      this.onResize(); // Initial check
  }

  // Modify mouseenter/mouseleave handling
  onHoverPolicy(isHovering: boolean) {
      if (!this.isSmallScreen) {
          this.hoverPolicy = isHovering;
      }
  }

  acceptPrivacy() {
    this.privacyAccepted = !this.privacyAccepted;

    if (this.privacyAccepted) {
      this.showError = false;
    }

  }

  submitForm() {
    this.showNameError = !this.name.trim();
    this.showMailError = !this.email.trim();
    this.showMessageError = !this.message.trim();

    const hasInputErrors = this.showNameError || this.showMailError || this.showMessageError;
    const hasPrivacyError = !this.privacyAccepted;

    if (hasInputErrors || hasPrivacyError) {
      this.showError = true;

      setTimeout(() => {
        this.showError = false;
        this.showNameError = false;
        this.showMailError = false;
        this.showMessageError = false;

      }, 4000);
      return;
    }

    this.showError = false;
  }


  onInputChange(field: 'name' | 'email' | 'message') {
    if (field === 'name') this.showNameError = !this.name.trim();
    if (field === 'email') this.showMailError = !this.email.trim();
    if (field === 'message') this.showMessageError = !this.message.trim();

  }
}

