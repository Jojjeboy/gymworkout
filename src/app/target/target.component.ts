import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExcerciseListComponent } from '../excercise-list/excercise-list.component';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [RouterModule, CommonModule, ExcerciseListComponent],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
})
export class TargetComponent {
  private workoutService = inject(WorkoutService);
  private activatedRoute = inject(ActivatedRoute);
  exercises:any = {};

  target:any = this.activatedRoute.snapshot.params['target'];

  constructor(){
    this.workoutService.getExcercisesByTarget(this.target).subscribe({
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
