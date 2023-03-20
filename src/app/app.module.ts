import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsAltComponent } from './contact-us-alt/contact-us-alt.component';
import { UsersComponent } from './users/users.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    MoviesHomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ExploreComponent,
    FooterComponent,
    MovieDetailsComponent,
    LoginComponent,
    SignupComponent,
    ContactUsAltComponent,
    UsersComponent,
    WishlistComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
