import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistModel } from '../../models/artist.model';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    private artist: string;
    private searchResult: ArtistModel[];
    
    constructor(private _spotifyService: SpotifyService) {}

    searchMusic() {
        this._spotifyService
            .searchMusic(this.artist)
            .subscribe(response => {
                this.searchResult = response.artists.items;
            })
    }
}
