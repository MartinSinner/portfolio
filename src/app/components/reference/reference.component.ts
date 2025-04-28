import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {

  hoveredIndex: number | null = null;
  
  reference = [
    {
      title: 'David Gerlitz',
      project: 'Join',
      description: 'Martin is a reliable and supportive team player. He contributes great ideas, works solution-oriented, and ensures a pleasant collaboration.',
      
    },

    {
      title: 'Patrick Glißmann',
      project: 'El Pollo Loco',
      description: 'Working with Martin was consistently positive. He is especially characterized by his reliable way of working and his strong willingness to learn and adopt new concepts.',
      
    },

    {
      title: 'Rui Pinto',
      project: 'Pinto Cases',
      description: 'Martin modernized my website and gave it a completely fresh look. Working with him was straightforward, his ideas for implementation were great –I am really happy with the result.',
   
    }
  ]


  activeIndex = 0;

  

  setHoveredIndex(index: number | null): void {
    if (window.innerWidth >= 783) {
      this.hoveredIndex = index;
    } else {
      this.hoveredIndex = null;
    }
  }
}
