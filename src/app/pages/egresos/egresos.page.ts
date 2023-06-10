<<<<<<< HEAD
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> d0d6c724d2105be8864e2acb2eb5bf593eb69d0e

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.page.html',
  styleUrls: ['./egresos.page.scss'],
})
export class EgresosPage implements OnInit {

<<<<<<< HEAD
  private router = inject(Router);

=======
  constructor() { }
>>>>>>> d0d6c724d2105be8864e2acb2eb5bf593eb69d0e

  ngOnInit() {
  }

<<<<<<< HEAD
  ira(){
    this.router.navigate(['/egresos-add']);
  }

=======
>>>>>>> d0d6c724d2105be8864e2acb2eb5bf593eb69d0e
}
