import { Component } from '@angular/core';
import { AgendasService } from '../agendas.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  formGroupAgendas: FormGroup;
  constructor(private FormBuilder: FormBuilder, private service: AgendasService, private router: Router){

    this.formGroupAgendas = FormBuilder.group({
      id: [''],
      namecommitment: [''],
      localcommitment:[''],
      date: [''],

    })

  }
  save(){
    this.service.save(this.formGroupAgendas.value).subscribe({
      next:()=> this.router.navigate(['agendas'])
    })
  }
}
