import { User } from './User';

export class Property{

propertyId : number;
propertyType : string;
room : string;
budget : number;
propertyStatus : string;
areaPerSq : string;
floorNo : number;
location : string;
locality : string;
user : User;

constructor( propertyType, room, budget, propertyStatus, areaPerSq, floorNo, location, locality, user){
    this.propertyType = propertyType;
    this.room = room;
    this.budget = budget;
    this.propertyStatus = propertyStatus;
    this.areaPerSq = areaPerSq;
    this.floorNo = floorNo;
    this.location = location;
    this.locality = locality;
    this.user = user;

}
       

get getLocation(): string {
    return this.location;
}

}