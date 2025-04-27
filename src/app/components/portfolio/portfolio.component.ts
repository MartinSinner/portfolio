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
      image: 'pololoco.svg',
      liveLink: '/polo-live',
      githubLink: '/polo-github'
    },

    {
      title: 'Pinto Cases',
      sections: [
        {
          heading: 'About the project',
          text: 'Modernization of a custom transport case website using WordPress, with focus on user experience, modern visuals, and mobile optimization.'
        },
        {
          heading: 'My responsibilities',
          text: 'I redesigned the layout, integrated new content, selected images, and handled direct client communication and feedback rounds.'
        },
        {
          heading: 'What I have learnt',
          text: 'I improved my skills in WordPress, page builders, and client collaboration. The project ended with positive feedback and a written client reference.'
        },
      ],
      technologies: ['wordpress.png'],
      image: 'pinto-cases.svg',
      liveLink: 'https://pinto-cases.de/',
      githubLink: ''
    },
    
    {
      title: 'Ongoing Project',
      sections: [
        {
          heading: 'About the project',
          text: 'DaBubble is a real-time messaging web application developed with Angular, TypeScript, and Firebase. It will allow users to authenticate, send and receive live messages, and manage conversations across devices.'
        },
        

      ],

      technologies: ['Angular.png', 'ts.png', 'firebase.png'],
      image: 'soon.svg',
      liveLink: '',
      githubLink: ''
    },


  ]

  fade = false;
  activeIndex = 0;
  isSmallScreen = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 830
  }

  setActiveProject(index: number) {
    this.fade = false;

    setTimeout(() => {
      this.activeIndex = index;
      this.fade = true;
    }, 10);
  }

}


