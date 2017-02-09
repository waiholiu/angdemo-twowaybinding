import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anotherchild',
  templateUrl: './anotherchild.component.html',
  styleUrls: ['./anotherchild.component.css']
})
export class AnotherchildComponent implements OnInit {

  constructor() { }

  @Input('counter')
  counterInternal : number

  ngOnInit() {
  }

}
