import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path:"login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "movies-home", component : MoviesHomeComponent},
  {path: "explore", component: ExploreComponent},
  {path: "ContactUs", component: ContactUsComponent},
  {path: "AboutUs", component: AboutUsComponent},
  {path: "footer", component: FooterComponent},
  {path: "movie-details", component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
