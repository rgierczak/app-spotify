import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumModel } from "../../models/album.model";
import { ArtistModel } from "../../models/artist.model";

import { SpotifyService } from '../../services/spotify.service';

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
                    });

                this._spotifyService
                    .getAlbums(id)
                    .subscribe((albums) => {
                        this.albums = albums.items;
                    });
            })
    }
}
