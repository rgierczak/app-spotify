import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumInterface } from "../../interfaces/album.interface";
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'album',
    templateUrl: './album.component.html'
})

export class AlbumComponent implements OnInit {
    id: string;
    album: AlbumInterface;
    
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
                    .getAlbum(id)
                    .subscribe((album) => {
                        this.album = album;
                    });
            })
    }
}
