import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  counterValue = 0;
  @Output() counterChange = new EventEmitter();
  
  @Input()
  get counter() {
    return this.counterValue;
  }
  
  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }
  
  decrement() {
    this.counter--;
  }
  
  increment() {
    this.counter++;
  }

}


