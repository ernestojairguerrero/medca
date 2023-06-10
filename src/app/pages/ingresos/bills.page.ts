import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  private router = inject(Router);


  ngOnInit() {
  }

  addBank(){
    this.router.navigate(['/add-banks']);

  }

}
