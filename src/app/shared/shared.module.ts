import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { BooleanPipe } from './boolean.pipe';
import { LocationPipe } from './location.pipe';

@NgModule({
    declarations: [
        BooleanPipe,
        LocationPipe,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [BooleanPipe, LocationPipe]
})
export class SharedModule { }
