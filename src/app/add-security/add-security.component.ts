import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {

  scode=""
  sname=""
  address=""
  mobno=""
  username=""
  password=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let data:any = {"scode":this.scode,"sname":this.sname,"address":this.address,"mobno":this.mobno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addSecurity(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        alert("added successfully")
      }
      else{
        alert("not added")
      }
    }

    )
  }

}
