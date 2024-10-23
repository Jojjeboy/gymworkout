import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body-part-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './body-part-list.component.html',
  styleUrl: './body-part-list.component.scss'
})
export class BodyPartListComponent {
  workoutService = inject(WorkoutService);

  
  bodyPartList = [];
  workouts = [];
  constructor(){
    

    this.workoutService.getBodyPartList().subscribe({
      next: (data) => {
        this.bodyPartList = data;
        //console.log(data);  
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
