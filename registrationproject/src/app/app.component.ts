import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registrationproject';

  whatToShow:number=0;
  display(num:number){
    this.whatToShow=num;
  }
}
