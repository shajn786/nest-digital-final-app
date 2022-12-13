import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  email=""
  password=""

  readValues=()=>
  {
    let data:any = {"email":this.email,"password":this.password}
    console.log(data)

    
  }

}
