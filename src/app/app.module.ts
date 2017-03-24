import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent  } from './components/search/search.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        NavbarComponent,
        SearchComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
