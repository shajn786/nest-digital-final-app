import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-security',
  templateUrl: './update-security.component.html',
  styleUrls: ['./update-security.component.css']
})
export class UpdateSecurityComponent {
  scode =""
  securitydetails:any=[]
  sname=""
  address=""
  mobno=""
  username=""

  constructor(private api : ApiService)
  {}

  search=()=>
  {
    let data:any={"scode":this.scode}
    console.log(data)
    this.api.searchSecurity(data).subscribe(

     (response:any)=>
     {
       this.securitydetails=response
     }



    )

  }

  UpdateValues=(id:any)=>
  {
    let data:any = {"id":id,"sname":this.sname,"address":this.address,"mobno":this.mobno}
    console.log(data)
    this.api.updateSecurity(data).subscribe(

     (response:any)=>
     {
      if(response.status=="success")
      {
        alert("update successfully")
        window.location.reload()
      }
      else{
        alert("not updated")
      }
     }

    )
  }

}
