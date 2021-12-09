import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  title = 'Professores';

  public professores = [
    { nome: 'João' },
    { nome: 'Beatriz' },
    { nome: 'Gerson' },
  ];
  constructor() {}

  ngOnInit() {}
}
