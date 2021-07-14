import { Pipe, PipeTransform } from '@angular/core';
import { Location } from './models/location';

@Pipe({ name: 'location' })
export class LocationPipe implements PipeTransform {
    transform(value: Location): string {
        return `(${value.latitude}, ${value.longitude})`;
    }
}