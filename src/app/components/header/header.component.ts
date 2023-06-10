import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

    // tipo
    @Input() tipo: string = '';
    // general
    @Input() title: string = '';

  
    constructor(
      private router: Router
    ) { }
  
    ngOnInit() {}
  
    // irTienda() {
    //   this.router.navigateByUrl('/servicio');
    // }
  
    // irCart() {
    //   this.router.navigateByUrl('/servicio-pay');
    // }

}
