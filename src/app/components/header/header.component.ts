import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
    @Input() title: string = '';
    @Input() ira: string = '';
=======
  @Input() title: string = '';
  @Input() url: string = '';
>>>>>>> 6f8049b17b07fc9595d0378207cbc48daccfd332

  ngOnInit() { }

}
