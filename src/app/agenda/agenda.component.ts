import { Component } from '@angular/core';
import { AgendasService } from './../agendas.service';
import { Router } from '@angular/router';
import { Agendas } from '../agendas';

@Component({
  selector: 'app-agendas',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
})
export class AgendaComponent {
  agenda: Agendas[] = [];

  constructor(private service: AgendasService, private router: Router) {}
  ngOnInit(): void {
    this.loadAgendas();
  }

  loadAgendas() {
    this.service.getAgendas().subscribe({
      next: (data) => (this.agenda = data),
    });
  }

  delete(agenda: Agendas) {
    this.service.delete(agenda).subscribe({
      next: () => this.loadAgendas(),
    });
  }
  create() {
    this.router.navigate(['forms']);
  }
  update() {
    this.router.navigate(['agenda']);
    }
  }

