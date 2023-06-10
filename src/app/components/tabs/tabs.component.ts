import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

  @Input() activo: string

  constructor(
    private ruta: Router
  ) { }

  ngOnInit() {}

  ira(ruta:string) {
    this.ruta.navigateByUrl('/'+ruta);
  }

}
