import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { AlbumModel } from "../../models/album.model";
import { ArtistModel } from "../../models/artist.model";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'artist',
    templateUrl: './artist.component.html'
})

export class ArtistComponent implements OnInit {
    id: string;
    artist: ArtistModel[];
    albums: AlbumModel[];

    constructor(
        private _spotifyService: SpotifyService,
        private route: ActivatedRoute) {
        
    }
    
    ngOnInit() {
        this.route
            .params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService
                    .getArtist(id)
                    .subscribe((artist) => {
                        this.artist = artist;
                    })
            })
    }
}
