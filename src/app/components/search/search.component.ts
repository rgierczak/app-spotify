import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    private artist: string;
    
    constructor(private _spotifyService: SpotifyService) {}

    searchMusic() {
        this._spotifyService
            .searchMusic(this.artist)
            .subscribe(response => {
                console.log(response.artists.items);
            })
    }
}
