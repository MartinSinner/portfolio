import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    gitHovered = false;
    mailHovered = false;
    linkedinHovered = false;
}
