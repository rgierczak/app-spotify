import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumInterface } from "../../interfaces/album.interface";
import { ArtistInterface } from "../../interfaces/artist.interface";
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'artist',
    templateUrl: './artist.component.html'
})

export class ArtistComponent implements OnInit {
    id: string;
    artist: ArtistInterface[];
    albums: AlbumInterface[];

    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute) {
        
    }
    
    ngOnInit() {
        this._route
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
