import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent  } from './components/search/search.component';

import { SpotifyService } from './services/spotify.service'; 

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        NavbarComponent,
        SearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [SpotifyService]
})

export class AppModule {}
