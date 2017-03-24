import { AlbumModel } from './album.model';

export class ArtistModel {
    id: number;
    name: string;
    genres: any;
    albums: AlbumModel[];
}
