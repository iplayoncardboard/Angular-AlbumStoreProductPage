import {Track} from './track'
import { getLocaleNumberSymbol } from '@angular/common';
import { Observable } from 'rxjs/Observable';

export interface Album {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks:Track[];

}
