import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.page.html',
  styleUrls: ['./ganancias.page.scss'],
})
export class GananciasPage implements OnInit {

  private router = inject(Router);


  ngOnInit() {
  }

  ira(){
    this.router.navigate(['/ganancias-add']);

  }

}
