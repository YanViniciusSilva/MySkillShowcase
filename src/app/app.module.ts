import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { languages } from './languages/languages';
import { ConfigBarComponent } from './shell/config-bar/config-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ConfigBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroMoon, heroSun }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
