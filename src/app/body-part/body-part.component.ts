import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-body-part',
  standalone: true,
  imports: [],
  templateUrl: './body-part.component.html',
  styleUrl: './body-part.component.scss'
})
export class BodyPartComponent {

  workoutService = inject(WorkoutService);
  exercisesForBodyPart = [];


  constructor(){ 
    this.workoutService.getBodyPart('back').subscribe({
      next: (data) => {
        this.exercisesForBodyPart = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
    
}
