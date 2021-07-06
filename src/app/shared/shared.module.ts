import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { BooleanPipe } from './boolean-pipe';

@NgModule({
    declarations: [
        BooleanPipe
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [BooleanPipe]
})
export class SharedModule { }
