import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Property } from '../Property';

@Component({
    selector: 'app-property',
    template: ` <form  action="">
                 <table>
                 <tr>
                 <td><input type="search" class="search_1" placeholder="Enter Id"  #id/>
                 <td><button type="submit" (click) = "searchById(id.value)" >Search</button>        
                </tr>
                </table>
                 </form>
                 <table  >
                 <tr><th>Property Id  </th> <td>{{property.propertyId}}</tr>
                 <tr ><th>propertyType</th><td>{{property.propertyType}}</tr>
                 <tr><th>No. Room</th> <td>{{property.room}}</tr>
                 <tr><th>Price </th> <td>{{property.budget}}</tr>
                 <tr> <th>propertyStatus</th><td>{{property.propertyStatus}}</tr>
                 <tr><th>areaPerSq</th> <td>{{property.areaPerSq}}</tr>
                 <tr> <th>floorNo</th><td>{{property.floorNo}}</tr>
                 <tr><th>Location</th> <td>{{property.location}}</tr>
                 <tr><th>Locality</th><td>{{property.locality}}</tr>
                 <tr><th>Seller Name</th> <td>{{property.user.userName}}</tr>
                 <tr><th>Seller Email Id</th> <td>{{property.user.emailId}}</tr>
                 <tr><td>< input type="submit"  >
                 
             </table>
                 
                 
                 `,
    //styles :
      
  })


  export class SearchByIdComponent{

    property : Property;
    constructor(private router: Router, private service : RealestateService){ }


    searchById(id){
        console.log("searching");
        this.service.searchById(id).subscribe( data => {this.property = data;})
        //console.log(this.properties);
      }
  }