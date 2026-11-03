import { Component } from '@angular/core';

interface Hobby {
  name: string;
  description: string;
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  hobbies: Hobby[] = [
    {
      name: 'Chess',
      description: 'Mostly correspondence games — I like the ones that let you actually think.',
    },
    {
      name: 'Hiking',
      description: 'Weekend trails when the weather cooperates, usually with a bad podcast queued up.',
    },
    {
      name: 'Home lab',
      description: 'A small rack of way too many servers for what it actually needs to do.',
    },
    {
      name: 'Cooking',
      description: 'Slow braises and anything that gives me an excuse to use the cast iron.',
    },
  ];
}
