import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<'en' | 'de'>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  private translations = {
    //Hero
    role: {
      en: 'FRONTEND DEVELOPER',
      de: 'FRONTEND ENTWICKLER'
    },
    name: {
      en: 'Martin Sinner',
      de: 'Martin Sinner'
    },

    //Navbar
    whyMe: {
      en: 'Why me',
      de: 'Warum ich'
    },
    skills: {
      en: 'Skills',
      de: 'Skills'
    },
    projects: {
      en: 'Projects',
      de: 'Projekte'
    },
    contact: {
      en: 'Contact',
      de: 'Kontakt'
    },

    //Why me
    whyMeTitle: {
      en: 'Why me',
      de: 'Warum ich',
    },

    whyMe1TitleSpan: {
      en: 'Determined',
      de: 'Zielstrebig',
    },
    whyMe1TitleRest: {
      en: '& Driven',
      de: '& Engagiert',
    },
    whyMe1Text: {
      en: 'Tough coding challenges motivate me—like building my JavaScript game “El Pollo Loco”. Giving up isn\'t my style; I\'ll debug until 2am if that\'s what it takes.',
      de: 'Herausfordernde Programmieraufgaben motivieren mich – wie beim Bau meines JavaScript-Spiels „El Pollo Loco“. Aufgeben ist nicht mein Stil – wenn’s sein muss, debugge ich bis 2 Uhr nachts.',
    },

    whyMe2TitleSpan: {
      en: 'Creative',
      de: 'Kreativ',
    },
    whyMe2TitleRest: {
      en: '& Detail-oriented',
      de: '& Detailverliebt',
    },
    whyMe2Text: {
      en: 'Designing pixel-perfect layouts isn’t just work—it’s my passion. From Angular apps to WordPress redesigns, details matter until they\'re exactly right.',
      de: 'Pixelgenaue Layouts zu gestalten ist für mich nicht nur Arbeit – es ist meine Leidenschaft. Ob Angular-Apps oder WordPress-Redesigns: Jedes Detail zählt, bis alles passt.',
    },
    whyMe3TitleSpan: {
      en: 'Thriving',
      de: 'Stark',
    },
    whyMe3TitleRest: {
      en: 'Under Pressure',
      de: 'unter Druck',
    },
    whyMe3Text: {
      en: 'Deadlines sharpen my focus. When our Firebase project hit tricky Git conflicts, I didn\'t panic—I adapted quickly. Honestly, pressure brings out my best.',
      de: 'Deadlines schärfen meinen Fokus. Als wir bei einem Firebase-Projekt komplexe Git-Konflikte hatten, bin ich ruhig geblieben – und habe schnell Lösungen gefunden. Druck bringt oft das Beste in mir hervor.',
    },
    letsTalk: {
      en: "Let's talk!",
      de: 'Los geht\'s!'
    },

    //Skills
    mySkillsTitle: {
      en: 'My Skills',
      de: 'Meine Skills'
    },
    upNext: {
      en: 'Up next: React and Vue.',
      de: 'Als Nächstes: React und Vue.'
    },
    description: {
      en: `React and Vue are next on my learning journey—planned once I finish my current projects. Staying curious and growing my skills keeps me sharp and motivated for future frontend challenges.`,
      de: `React und Vue stehen als Nächstes auf meinem Lernplan – sobald ich laufende Projekte abgeschlossen habe. Neugierig zu bleiben und mein Wissen zu erweitern, hält mich fit und motiviert für neue Frontend-Herausforderungen.`
    },

    //Projects 
    myProjectsTitle: {
      en: 'My Projects',
      de: 'Meine Projekte',
    },
    myProjectsCount: {
      en: 'Project',
      de: 'Projekt',
    },

    //Reference 
    referenceTitle: {
      en: 'Need a teamplayer? Here what my colleagues said about me',
      de: 'Braucht ihr einen Teamplayer? Das sagen meine Kollegen über mich',
    },

    referenceTitleMobile: {
      en: 'Need a teamplayer?',
      de: 'Teamplayer gesucht?',
    },
    referenceTitleTwoMobile: {
      en: 'Here what my colleagues said about me',
      de: 'Das sagen meine Kollegen über mich',
    },

    referenceDavidName: {
      en: 'David Gerlitz',
      de: 'David Gerlitz',
    },
    referenceDavidProject: {
      en: 'Join',
      de: 'Join',
    },
    referenceDavidText: {
      en: 'Martin is a reliable and supportive team player. He contributes great ideas, works solution-oriented, and ensures a pleasant collaboration.',
      de: 'Martin ist ein zuverlässiger und unterstützender Teamplayer. Er bringt großartige Ideen ein, arbeitet lösungsorientiert und sorgt für eine angenehme Zusammenarbeit.',
    },

    referencePatrickName: {
      en: 'Patrick Glißmann',
      de: 'Patrick Glißmann',
    },
    referencePatrickProject: {
      en: 'El Pollo Loco',
      de: 'El Pollo Loco',
    },
    referencePatrickText: {
      en: 'Working with Martin was consistently positive. He is especially characterized by his reliable way of working and his strong willingness to learn and adopt new concepts.',
      de: 'Die Zusammenarbeit mit Martin war durchweg positiv. Besonders hervorzuheben ist seine zuverlässige Arbeitsweise und seine starke Bereitschaft, neue Konzepte zu lernen und umzusetzen.',
    },

    referenceRuiName: {
      en: 'Rui Pinto',
      de: 'Rui Pinto',
    },
    referenceRuiProject: {
      en: 'Pinto Cases',
      de: 'Pinto Cases',
    },
    referenceRuiText: {
      en: 'Martin modernized my website and gave it a completely fresh look. Working with him was straightforward, his ideas for implementation were great – I am really happy with the result.',
      de: 'Martin hat meine Website modernisiert und ihr einen frischen Look verliehen. Die Zusammenarbeit war einfach, seine Ideen super – ich bin sehr zufrieden.',
    },

    //Contact
    contactTitle: {
      en: 'Contact me',
      de: 'Kontaktiere mich'
    },
    contactIntro1: {
      en: `If you're looking for someone who doesn't quit until the job is done and isn't afraid to dive deep into complex problems – let's talk.`,
      de: `Wenn du jemanden suchst, der nicht aufgibt, bis der Job erledigt ist – und sich nicht scheut, tief in komplexe Probleme einzutauchen – dann lass uns sprechen.`
    },
    contactIntro2: {
      en: `Whether it's about projects, collaborations, or new challenges: I'm open to opportunities that value creativity, precision, and determination.`,
      de: `Ob Projekte, Zusammenarbeit oder neue Herausforderungen – ich bin offen für Möglichkeiten, die Kreativität, Präzision und Entschlossenheit schätzen.`
    },
    ctaText: {
      en: 'Let us work together!',
      de: 'Lass uns zusammen arbeiten!'
    },
    yourName: {
      en: 'Your name',
      de: 'Dein Name'
    },
    yourEmail: {
      en: 'Your Email',
      de: 'Deine E-Mail'
    },
    yourMessage: {
      en: 'Your Message',
      de: 'Deine Nachricht'
    },
    privacyNotice1: {
      en: `I've read the `,
      de: `Ich habe die  `
    },
    privacyNotice2: {
      en: `privacy policy `,
      de: `Datenschutzerklärung`
    },
    privacyNotice3: {
      en: ` and agree to the processing of my data as outlined.`,
      de: `gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.`
    },
    privacyAccept: {
      en: `Please accept the privacy policy`,
      de: `Bitte akzeptieren Sie die Datenschutzerklärung`
    },
    sendButton: {
      en: 'Send',
      de: 'Senden'
    },
    sending: {
      en: 'Sending...',
      de: 'Wird gesendet...'
    },
    emailLabel: {
      en: 'E-mail:',
      de: 'E-Mail:'
    },
    invalidEmail: {
      'en': 'Please enter a valid email address',
      'de': 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    },
    messageSent: {
      'en': 'Message sent successfully!',
      'de': 'Nachricht erfolgreich gesendet!'
    },

    //Footer
    legalNotice: {
      en: 'Legal Notice',
      de: 'Impressum'
    },
  }


  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage.next(lang);
  }


  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }


  translate(key: keyof typeof this.translations) {
    const lang = this.currentLanguage.value;
    return this.translations[key]?.[lang] || key;
  }
}
