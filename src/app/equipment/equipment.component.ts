import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExcerciseComponent } from '../excercise/excercise.component';
import { ExcerciseListComponent } from '../excercise-list/excercise-list.component';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [RouterModule, CommonModule, ExcerciseListComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent {
  private workoutService = inject(WorkoutService);
  private activatedRoute = inject(ActivatedRoute);
  exercises:any = {};

  equipment:any = this.activatedRoute.snapshot.params['equipment'];

  constructor(){
    this.workoutService.getExcercisesByEquipment(this.equipment).subscribe({
      next: (data) => {
        this.exercises = data;
        //console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
