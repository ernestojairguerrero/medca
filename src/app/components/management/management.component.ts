import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent  implements OnInit {

  
  @Input() icon: string
  @Input() title: string
  @Input() ruta: string

  constructor() { }

  ngOnInit() {}

}
