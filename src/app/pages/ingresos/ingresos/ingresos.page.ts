import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  private router = inject(Router);


  ngOnInit() {
  }

  addBank(){
    this.router.navigate(['/add-banks']);

  }

}
