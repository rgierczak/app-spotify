import { AlbumInterface } from './album.interface';

export interface ArtistInterface {
    id: number;
    name: string;
    genres: any;
    albums: AlbumInterface[];
}
