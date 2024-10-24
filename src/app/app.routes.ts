import { Routes } from '@angular/router';
import { BodyPartComponent } from './body-part/body-part.component';
import { BodyPartListComponent } from './body-part-list/body-part-list.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { TargetsComponent } from './targets/targets.component';
import { TargetComponent } from './target/target.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipmentComponent } from './equipment/equipment.component';

export const routes: Routes = [

    {
        path: '',
        component: BodyPartListComponent
    },
    {
        path: 'bodypart/:part',
        component: BodyPartComponent
    },
    {
        path: 'exercise/:id',
        component: ExcerciseComponent
    },
    {
        path: 'targets',
        component: TargetsComponent
    },
    {
        path: 'target/:target',
        component: TargetComponent
    },
    {
        path: 'equipments',
        component: EquipmentsComponent
    },
    {
        path: 'equipment/:equipment',
        component: EquipmentComponent
    },

];
