import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;


  ngOnInit() {
    window.addEventListener('scroll', this.checkScroll, true);
  }

  checkScroll = () => {
    this.isScrolled = window.scrollY > 750; 
  };
} 
