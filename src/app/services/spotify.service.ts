import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const LIMIT = 20;
const OFFSET = 0;
const API_URL = 'https://api.spotify.com/v1/';

@Injectable()
export class SpotifyService {
    private searchURL: string;
    
    constructor(private _http: Http) {}
    
    private static _buildAPIURL(str: string, type: string) {
        return API_URL +
            'search?query=' + str +
            '&offset=' + OFFSET +
            '&limit=' + LIMIT +
            '&type=' + type;
    }
    
    searchMusic(str: string, type = 'artist') {
        this.searchURL = SpotifyService._buildAPIURL(str, type);
        
        return this._http
            .get(this.searchURL)
            .map(response => response.json());
    }
}
