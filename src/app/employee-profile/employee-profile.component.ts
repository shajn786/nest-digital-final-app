import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {
  id:any=""
  userdata:any=[]
  constructor(private api : ApiService)
  {
    this.id  = localStorage.getItem("id")
    console.log(this.id)
    let data:any={"id":this.id}
    this.api.getEmpProfileData(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      this.userdata=response
    }

    )
  }

}
