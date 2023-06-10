import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.page.html',
  styleUrls: ['./egresos.page.scss'],
})
export class EgresosPage implements OnInit {

  private router = inject(Router);


  ngOnInit() {
  }

  ira(){
    this.router.navigate(['/egresos-add']);
  }

}


