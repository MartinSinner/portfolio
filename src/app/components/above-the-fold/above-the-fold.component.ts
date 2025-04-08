import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  emailHovered = false;
  githubHovered = false;
  linkedinHovered = false;

  arrowHovered = false;
  logoHovered = false;
}
