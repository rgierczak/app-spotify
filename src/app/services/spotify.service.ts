import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const LIMIT = 20;
const OFFSET = 0;
const API_URL = 'https://api.spotify.com/v1/';

@Injectable()
export class SpotifyService {
    constructor(private _http: Http) {}
    
    private static _buildSearchMusicURL(str: string, type: string) {
        return API_URL +
            'search?query=' + str +
            '&offset=' + OFFSET +
            '&limit=' + LIMIT +
            '&type=' + type;
    }

    private static _buildGetArtistURL(id: string) {
        return API_URL + 'artists/' + id;
    }
    
    private _getData(url: string) {
        return this._http
            .get(url)
            .map(response => response.json());
    }
    
    searchMusic(str: string, type = 'artist') {
        let url = SpotifyService._buildSearchMusicURL(str, type);
        return this._getData(url);
    }

    getArtist(id: string) {
        let url = SpotifyService._buildGetArtistURL(id);
        return this._getData(url);
    }
}
