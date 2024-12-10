import { Component } from '@angular/core';
import { AgendasService } from './../agendas.service';
import { Router } from '@angular/router';
import { Agendas } from '../agendas';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  agendas: Agendas[] = []

  constructor(private service: AgendasService, private router: Router){}
  ngOnInit(): void{
    this.loadAgendas();
  }
  loadAgendas(){
    this.service.getAgendas().subscribe({
      next: data => this.agendas = data
    })
  }
  delete(agendas: Agendas){
    this.service.delete(agendas).subscribe({
      next: ()=> this.loadAgendas()
    })
  }
  create(){
    this.router.navigate(['agendas-form'])
  }
}
