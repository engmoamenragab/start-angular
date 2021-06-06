import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { RightsComponent } from "./rights/rights.component";
import { NotfoundComponent } from "./notfound/notfound.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, PortfolioComponent, AboutComponent, ContactComponent, FooterComponent, RightsComponent, NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
