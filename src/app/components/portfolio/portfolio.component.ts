import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})



export class PortfolioComponent {

  projectData = [

    {
      title: 'Join',
      sections: [
        {
          heading: 'About the project',
          text: 'Join is a Kanban-inspired task manager for web and mobile, featuring task creation, drag-and-drop organization, guest access, and user registration. Data is managed via Firebase.'
        },
        {
          heading: 'How I have organised my work',
          text: 'I focused on modular, reusable code and clear naming conventions. Ensuring responsive design from the start was a key priority.'
        },
        {
          heading: 'My group work experience',
          text: 'In a team of four developers, I built the Add Task feature—including form handling, validation, and Firebase integration. We collaborated remotely via Git and launched the project after four weeks.'
        },

      ],

      technologies: ['html.png', 'css.png', 'javascript.png'],
      image: 'join.svg',
      liveLink: '/join-live',
      githubLink: '/join-github'
    },

    {
      title: 'El Pollo Loco',
      sections: [
        {
          heading: 'About the project',
          text: 'El Pollo Loco is a 2D jump\'n\'run browser game built with JavaScript and HTML5 Canvas. Players collect coins, defeat enemies, and battle a final boss. The game features custom animations, sound effects, and works smoothly on desktop, tablet, and mobile (including fullscreen mode).'
        },
        {
          heading: 'How I have organised my work',
          text: 'I used object-oriented JavaScript to build modular classes for the world, enemies, and interactions—making the code clean, reusable, and scalable.'
        },
        {
          heading: 'What I have learnt',
          text: 'I deepened my skills in object-oriented programming, Canvas rendering, and responsive game development.'
        }
      ],

      technologies: ['html.png', 'css.png', 'javascript.png'],
      image: 'elpoloscreen.svg',
      liveLink: '/polo-live',
      githubLink: '/polo-github'
    },

    {
      title: 'Pokedex',
      sections: [
        {
          heading: 'About the project',
          text: 'Single Page Application using REST API to display Pokémon details. Users can browse, view stats and learn about evolutions.'
        },
        {
          heading: 'How I have organised my work',
          text: 'I fetched data from the PokéAPI, used asynchronous JavaScript and created a responsive card layout. The UI was optimized for both mobile and desktop.'
        },
        {
          heading: 'What I have learnt',
          text: 'The Pokedex was a solo project that helped me understand how to handle APIs, display data dynamically and improve my JS logic.'
        },

      ],

      technologies: ['html.png', 'css.png', 'javascript.png'],
      image: 'pokedex.png',
      liveLink: '/join-live',
      githubLink: '/join-github'
    },
    {
      title: 'Pinto Cases',
      sections: [
        {
          heading: 'About the project',
          text: 'Modernisierung der bestehenden Webseite eines Herstellers für maßgefertigte Transportkoffer. Umsetzung mit WordPress unter Berücksichtigung von Nutzerführung, Bildsprache und Mobiloptimierung.'
        },
        {
          heading: 'My responsibilities',
          text: 'Ich war verantwortlich für Design, Seitenstruktur, das Einfügen neuer Inhalte sowie die Bildauswahl. Dabei habe ich mit dem Kunden direkt kommuniziert und Feedbackschleifen umgesetzt.'
        },
        {
          heading: 'What I have learnt',
          text: 'Der Umgang mit WordPress, Page Buildern und Kundenfeedback war besonders lehrreich. Ich konnte dabei meine Kommunikations- und Umsetzungsfähigkeiten im realen Projektkontext stärken.'
        },
      ],
      technologies: ['wordpress.png'],
      image: 'pinto-cases.png',
      liveLink: 'https://pinto-cases.de/',
      githubLink: ''
    }


  ]

  fade = false;
  activeIndex = 0;
  isSmallScreen = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 784
  }

  setActiveProject(index: number) {
    this.fade = false;

    setTimeout(() => {
      this.activeIndex = index;
      this.fade = true;
    }, 10);
  }

}


