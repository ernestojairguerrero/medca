import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.page.html',
  styleUrls: ['./usuarios-add.page.scss'],
})
export class UsuariosAddPage implements OnInit {
  
  roles: string[] = ['Supervisor', 'Gerente', 'Cajeros'];

  constructor() {}

  ngOnInit() {}
}
