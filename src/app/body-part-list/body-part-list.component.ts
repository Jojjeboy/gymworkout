import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-part-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-part-list.component.html',
  styleUrl: './body-part-list.component.scss'
})
export class BodyPartListComponent {
  workoutService = inject(WorkoutService);

  
  bodyPartList = [];
  workouts = [];
  constructor(){
    /*
    this.workoutService.getWorkouts().subscribe({
      next: (data) => {
        this.workouts = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.workoutService.getBodyPart('back').subscribe({
      next: (data) => {
        this.bodyPartList = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    
      */

    this.workoutService.getBodyPartList().subscribe({
      next: (data) => {
        this.bodyPartList = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
