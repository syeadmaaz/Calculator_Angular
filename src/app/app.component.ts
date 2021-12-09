import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  answer = 0;
  prime = '';
  title: any;
  Add(first: string, second: string) {
    var first_val = parseInt(first);
    var second_val = parseInt(second);
    console.log(first_val + second_val);
    this.answer = first_val + second_val;
  }
  Sub(first: string, second: string) {
    var first_val = parseInt(first);
    var second_val = parseInt(second);
    console.log(first_val - second_val);
    this.answer = first_val - second_val;
  }
  Multiply(first: string, second: string) {
    var first_val = parseInt(first);
    var second_val = parseInt(second);
    console.log(first_val * second_val);
    this.answer = first_val * second_val;
  }
  Divide(first: string, second: string) {
    var first_val = parseInt(first);
    var second_val = parseInt(second);
    console.log(first_val / second_val);
    this.answer = first_val / second_val;
  }
  Fact(Single_ele: string) {
    var Single = parseInt(Single_ele);
    var result = 1;

    for (let i = Single; i > 0; i--) {
      result = result * i;
    }
    console.log(result);
    this.answer = result;
    console.log(this.answer);
  }
  Prime(Single_ele: string) {
    var Single = parseInt(Single_ele);
    if (Single == 1) {
      console.log('Not a prime number');
      this.prime = 'Not a prime number';
    } else {
      var incre = 0;
      for (let i = Single; i > 0; i--) {
        if (Single % i == 0) {
          incre += 1;
        }
      }
      if (incre > 2) {
        console.log('Not a prime number');
        this.prime = 'Not a prime number';
      } else {
        console.log('A prime number');
        this.prime = 'A prime number';
      }
    }
  }
}
