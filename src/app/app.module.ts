import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
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
        AlbumComponent,
        ArtistComponent,
        NavbarComponent,
        SearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [SpotifyService]
})

export class AppModule {}
