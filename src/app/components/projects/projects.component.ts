import { Component } from '@angular/core';

interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Ledgerline',
      year: '2025',
      description:
        'An event-sourced payments ledger that reconciles across three currencies with an audit trail that satisfies finance, not just engineering.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka'],
      link: '#',
    },
    {
      name: 'Ratekeeper',
      year: '2024',
      description:
        'A distributed rate limiter and API gateway used in front of six internal services, cutting p99 latency during traffic spikes by half.',
      tags: ['Node.js', 'Redis', 'Docker'],
      link: '#',
    },
    {
      name: 'Signalbox',
      year: '2023',
      description:
        'A notification and webhook delivery service with exponential backoff, dead-letter queues, and per-tenant delivery guarantees.',
      tags: ['Python', 'Django', 'RabbitMQ'],
      link: '#',
    },
    {
      name: 'Scheduler-9',
      year: '2022',
      description:
        'A distributed job scheduler built to replace a fragile cron setup, now handling several thousand recurring jobs across environments.',
      tags: ['Java', 'Kubernetes', 'gRPC'],
      link: '#',
    },
  ];
}
