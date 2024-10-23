import { Routes } from '@angular/router';
import { BodyPartComponent } from './body-part/body-part.component';
import { BodyPartListComponent } from './body-part-list/body-part-list.component';

export const routes: Routes = [

    {
        path: '',
        component: BodyPartListComponent
    },
    {
        path: 'bodypart/:part',
        component: BodyPartComponent
    }

];
