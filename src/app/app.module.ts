import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RealestateService } from './realestate.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PropertyComponent } from './property/property.component';
import { SearchByLocationComponent } from './property/searchByLocation';
import { SearchByTypeComponent } from './property/searchByType';
import { SearchByBudgetComponent } from './property/searchByBudget';
import { SearchByIdComponent } from './property/searchbyid';
import { AnalysisComponent } from './analysis/analysis.component';
import { TopBuyerComponent } from './analysis/topBuyer';
import { LocationAnalysisComponent } from './analysis/LocationAnalysis';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './login/signup';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateProfileComponent,
    UpdateProfileComponent,
    PropertyComponent,
    SearchByLocationComponent,
    SearchByTypeComponent,
    SearchByBudgetComponent,
    SearchByIdComponent,
    AnalysisComponent,
    TopBuyerComponent,
    LocationAnalysisComponent,
    UserComponent,
    AdminComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RealestateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
