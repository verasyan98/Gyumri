import { Interest } from './components/interest/interest.component';
import { Activity } from './components/activity/activity.componeent';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { HomePage } from './views/main/home/home.page';
import { MainView } from './views/main/main.view';
import { Journey } from './components/journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    HomePage,
    MainView,
    Activity,
    Journey,
    Interest,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
