import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})



export class PortfolioComponent {
  fade = false;
  activeIndex = 0;
  isSmallScreen = false;

  currentLanguage: 'en' | 'de' = 'en';
  constructor(@Inject(PLATFORM_ID) private platformId: Object, public languageService: LanguageService) {}


  projectData = [

    {
      title: { en: 'Join', de: 'Join' },
      sections: [
        {
          heading: { en: 'About the project', de: 'Über das Projekt' },
          text: {
            en: 'Join is a Kanban-inspired task manager for web and mobile, featuring task creation, drag-and-drop organization, guest access, and user registration. Data is managed via Firebase.',
            de: 'Join ist ein Kanban-inspirierter Task-Manager für Web und Mobile. Er bietet Funktionen wie Aufgabenanlage, Drag-and-Drop, Gastzugang und Benutzerregistrierung. Die Datenverwaltung erfolgt über Firebase.'
          }
        },
        {
          heading: { en: 'How I have organised my work', de: 'So habe ich meine Arbeit organisiert' },
          text: {
            en: 'I focused on modular, reusable code and clear naming conventions. Ensuring responsive design from the start was a key priority.',
            de: 'Ich habe auf modularen, wiederverwendbaren Code und klare Namensgebung gesetzt. Responsive Design war dabei von Anfang an ein zentrales Ziel.'
          }
        },
        {
          heading: { en: 'My group work experience', de: 'Meine Gruppenerfahrung' },
          text: {
            en: 'In a team of four developers, I built the Add Task feature—including form handling, validation, and Firebase integration. We collaborated remotely via Git and launched the project after four weeks.',
            de: 'In einem Viererteam habe ich das Add-Task-Feature entwickelt – inklusive Formularlogik, Validierung und Firebase-Anbindung. Wir arbeiteten remote über Git und schlossen das Projekt nach vier Wochen ab.'
          }
        }
      ],
      technologies: ['html.png', 'css.png', 'javascript.png'],
      image: 'laptopjoin.svg',
      liveLink: 'https://martin-sinner.com/join/html/login.html',
      githubLink: 'https://github.com/MartinSinner/join'
    },

    {
      title: { 
        en: 'El Pollo Loco', 
        de: 'El Pollo Loco' 
      },
      sections: [
        {
          heading: { 
            en: 'About the project', 
            de: 'Über das Projekt' 
          },
          text: { 
            en: `El Pollo Loco is a 2D jump'n'run browser game built with JavaScript and HTML5 Canvas. Players collect coins, defeat enemies, and battle a final boss. The game features custom animations, sound effects, and works smoothly on desktop, tablet, and mobile (including fullscreen mode).`, 
            de: `El Pollo Loco ist ein 2D Jump’n’Run-Browsergame, entwickelt mit JavaScript und HTML5 Canvas. Spieler sammeln Münzen, besiegen Gegner und treten gegen einen Endboss an. Das Spiel bietet eigene Animationen, Soundeffekte und läuft auf Desktop, Tablet und Mobilgeräten flüssig – auch im Vollbildmodus.` 
          }
        },
        {
          heading: { 
            en: 'How I have organised my work', 
            de: 'So habe ich meine Arbeit organisiert' 
          },
          text: { 
            en: `I used object-oriented JavaScript to build modular classes for the world, enemies, and interactions—making the code clean, reusable, and scalable.`, 
            de: `Ich nutzte objektorientiertes JavaScript, um modulare Klassen für Welt, Gegner und Interaktionen zu erstellen – für sauberen, wiederverwendbaren und skalierbaren Code.` 
          }
        },
        {
          heading: { 
            en: 'What I have learnt', 
            de: 'Was ich gelernt habe' 
          },
          text: { 
            en: `I deepened my skills in object-oriented programming, Canvas rendering, and responsive game development.`,
            de: `Ich habe meine Fähigkeiten in objektorientierter Programmierung, Canvas-Rendering und responsiver Spieleentwicklung weiter vertieft.` 
          }
        }
      ],
      technologies: ['html.png', 'css.png', 'javascript.png'],
      image: 'laptoppololoco.svg',
      liveLink: 'https://martin-sinner.com/el-pollo-loco/index.html',
      githubLink: 'https://github.com/MartinSinner/el_pollo_loco'
    },

    {
      title: { 
        en: 'Pinto Cases', 
        de: 'Pinto Cases' 
      },
      sections: [
        {
          heading: { 
            en: 'About the project', 
            de: 'Über das Projekt' 
          },
          text: { 
            en: 'Modernization of a custom transport case website using WordPress, with focus on user experience, modern visuals, and mobile optimization.', 
            de: 'Modernisierung einer Website für maßgefertigte Transportkoffer mit WordPress. Fokus lag auf Nutzerfreundlichkeit, modernem Design und mobiler Optimierung.' 
          }
        },
        {
          heading: { 
            en: 'My responsibilities', 
            de: 'Meine Aufgaben' 
          },
          text: { 
            en: 'I redesigned the layout, integrated new content, selected images, and handled direct client communication and feedback rounds.', 
            de: 'Ich habe das Layout überarbeitet, neue Inhalte integriert, Bilder ausgewählt und die direkte Kommunikation mit dem Kunden inklusive Feedbackrunden übernommen.' 
          }
        },
        {
          heading: { 
            en: 'What I have learnt', 
            de: 'Was ich gelernt habe' 
          },
          text: { 
            en: 'I improved my skills in WordPress, page builders, and client collaboration. The project ended with positive feedback and a written client reference.', 
            de: 'Ich konnte meine Fähigkeiten in WordPress, Pagebuildern und der Zusammenarbeit mit Kunden verbessern. Das Projekt wurde mit positivem Feedback und einer schriftlichen Referenz abgeschlossen.' 
          }
        }
      ],
      technologies: ['wordpress.png'],
      image: 'laptoppintocases.svg',
      liveLink: 'https://pinto-cases.de/',
      githubLink: ''
    },
    
    {
      title: { 
        en: 'Ongoing Project', 
        de: 'Laufendes Projekt' 
      },
      sections: [
        {
          heading: { 
            en: 'About the project', 
            de: 'Über das Projekt' 
          },
          text: { 
            en: 'DaBubble is a real-time messaging web application developed with Angular, TypeScript, and Firebase. It will allow users to authenticate, send and receive live messages, and manage conversations across devices.', 
            de: 'DaBubble ist eine Echtzeit-Messaging-Webanwendung, entwickelt mit Angular, TypeScript und Firebase. Nutzer können sich authentifizieren, Nachrichten senden und empfangen sowie Konversationen geräteübergreifend verwalten.' 
          }
        }
      ],
      technologies: ['Angular.png', 'ts.png', 'firebase.png'],
      image: 'soon.svg',
      liveLink: '',
      githubLink: ''
    },
  ]

  

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });

    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
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

  openProjectLink(url: string) {
    if (url) {
        window.open(url, '_blank');
    }
}

}


