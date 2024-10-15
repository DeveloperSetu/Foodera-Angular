import { Routes } from '@angular/router';
import { HomeComponent } from './Commponents/home/home.component';
import { DashbordComponent } from './Commponents/dashbord/dashbord.component';
import { AboutComponent } from './Commponents/about/about.component';
import { ExploreComponent } from './Commponents/explore/explore.component';
import { ReviewComponent } from './Commponents/review/review.component';
import { FAQComponent } from './Commponents/faq/faq.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home" , pathMatch:'full'},
// === Home Route ===/
    {path:"home" , component:HomeComponent},
// === About Route ===/
    {path:"about" , component:AboutComponent},
// === Explore Route ===/
    {path:"explore" , component:ExploreComponent},
// === Reviews Route ===/
    {path:"review" , component:ReviewComponent},
// === FAQ Route ===/
    {path:"FAQ" , component:FAQComponent},    
// === Dashbord Route ===/
    {path:"dashbord" , component:DashbordComponent},
];
