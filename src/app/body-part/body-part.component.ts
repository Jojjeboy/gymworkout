import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-body-part',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './body-part.component.html',
  styleUrl: './body-part.component.scss'
})
export class BodyPartComponent {

  private workoutService = inject(WorkoutService);
  private activatedRoute = inject(ActivatedRoute);

  exercisesForBodyPart:any = [];

  bodyPart:any = this.activatedRoute.snapshot.params['part'];



  constructor(){ 
    this.workoutService.getBodyPart(this.bodyPart).subscribe({
      next: (data) => {
        this.exercisesForBodyPart = data;
        //console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
    
}
