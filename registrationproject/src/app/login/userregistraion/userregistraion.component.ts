import { Component } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-userregistraion',
  templateUrl: './userregistraion.component.html',
  styleUrls: ['./userregistraion.component.css']
})
export class UserregistraionComponent {

  reguserdata:User[]=[];
  name:string="";
    address:string="";
    email:string="";
    createPass:string="";

    newUser:User=new User();

    regsecess(){

      this.newUser.name=this.name;
      this.newUser.address=this.address;
      this.newUser.email=this.email;
      this.newUser.createPass=this.createPass;
       this.reguserdata.push(this.newUser);
       console.log(this.reguserdata);
       this.newUser=new User();
    }



}
