import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [RouterModule, CommonModule],
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
