import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { languages } from './languages/languages';
import { ConfigBarComponent } from './shell/config-bar/config-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared-components/loading/loading.component';
import { NgModule } from '@angular/core';
import { NbTabsetModule, NbThemeModule } from '@nebular/theme';
import { provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ConfigBarComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroMoon, heroSun }),
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NbThemeModule.forRoot(),
    NbTabsetModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule { }
