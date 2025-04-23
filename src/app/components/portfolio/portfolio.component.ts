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
          text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
        },
        {
          heading: 'How I have organised my work',
          text: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing'
        },
        {
          heading: 'My group work experience',
          text: 'How many people were in the team and what was your role? Describe your tasks in 1–2 sentences. It is nice to mention a good teamwork and cooperation.'
        },

      ],

      technologies: ['html.png', 'css.png', 'javascript.png'],
      image: 'join.jpg',
      liveLink: '/join-live',
      githubLink: '/join-github'
    },

    {
      title: 'El Pollo Loco',
      sections: [
        {
          heading: 'About the project',
          text: 'Jump’n’Run browser game where the player collects coins, defeats enemies and completes levels with custom animations and sound effects.'
        },
        {
          heading: 'How I have organised my work',
          text: 'The project was developed using object-oriented programming. I created and structured multiple JS classes to represent the world, enemies and interactions.'
        },
        {
          heading: 'What I have learnt',
          text: 'Bla bla bla'
        },

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

  checkScreenSize(){
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


