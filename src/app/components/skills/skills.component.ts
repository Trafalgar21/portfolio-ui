import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      label: 'Languages',
      items: ['Java', 'Python', 'Node.js', 'SQL'],
    },
    {
      label: 'Frameworks',
      items: ['Spring Boot', 'Express', 'Django', 'gRPC'],
    },
    {
      label: 'Data & messaging',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka'],
    },
    {
      label: 'Infrastructure',
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    },
  ];
}
