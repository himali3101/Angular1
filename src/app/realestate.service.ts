import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './Profile';
import { Property } from './Property';
import { User } from './User';
import { PropertySell } from './PropertySell';

@Injectable({
  providedIn: 'root'
})
export class RealestateService {

  

  constructor(private http : HttpClient) { }

  zuulurl =  'http://localhost:8888'

  baseurl = 'http://localhost:9002/login';

  baseurl1 = 'http://localhost:9003'

  propertyurl = 'http://localhost:9005'

  analysisurl = 'http://localhost:9091'
  
  public login( userName : string , password : string) : Observable<boolean>{
    return this.http.get<boolean>(`${this.zuulurl}/login/${userName}/${password}`);
  }

  public signup(userName : string , password : string, userType : string) {
   
    

    return this.http.post( this.zuulurl+'/login/signup',{
      userName : userName,
      password: password,
      userType : userType} );
  }

  public createProfile( user : Profile) : Observable<Profile>{
    return this.http.post<Profile>(this.zuulurl+'/profile/create', user);
  }

  public updateProfile( user : Profile) : Observable<Profile>{
    return this.http.post<Profile>(this.zuulurl+'/profile/update', user);
  }
  
  public addProperty( property : Property) : Observable<Property>{
    return this.http.post<Property>(this.zuulurl+'/property/', property);
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let data : FormData = new FormData();
    data.append('file', file, file.name);
    const newRequest = new HttpRequest('POST', 'http://localhost:8888/property/savefile)', data);
    return this.http.request(newRequest);

   // return this.http.post<HttpEvent<{}>>('http://localhost:9005/property/savefile',data);

    }



  public searchById( propertyId : number) : Observable<Property>{
    return this.http.get<Property>(`${this.zuulurl}/property/searchbyid/${propertyId}` )
  }

  public searchByLocation( location : string) : Observable<Property[]>{
    return this.http.get<Property[]>(`${this.zuulurl}/property/searchbylocation/${location}` )
  }

  public searchByType( propertyType : string) : Observable<Property[]>{
    return this.http.get<Property[]>(`${this.zuulurl}/property/searchbytype/${propertyType}` )
  }

  public searchByBudget( budget : number) : Observable<Property[]>{
    return this.http.get<Property[]>(`${this.zuulurl}/property/searchbybudget/${budget}` )
  }

  public locationAnalysis() : Observable<PropertySell[]>{
    return this.http.get<PropertySell[]>(`${this.zuulurl}/analysis/data` );
  }

  public SoldLocationAnalysis(analysisData) {
   
  return this.http.post(this.zuulurl+'/analysis/storedata', analysisData )

}



}