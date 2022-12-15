import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  email=""
  password=""
  id:any=[]
  constructor(private api : ApiService, private route : Router)
  {

  }

  readValues=()=>
  {
    let data:any = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.employeeAuth(data).subscribe(

      (response:any)=>
      {
       if(response.status == "success")
       {
         console.log(response)
         this.id = response.empid
         localStorage.setItem("id",this.id)
 
         this.route.navigate(["/searchsecurity"])
       }
       else{
         alert("invalid credential")
       }
      }
 
     )

    
  }

}
