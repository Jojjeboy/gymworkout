import { CommonModule } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excercise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './excercise.component.html',
  styleUrl: './excercise.component.scss'
})
export class ExcerciseComponent {
  private workoutService = inject(WorkoutService);
  private activatedRoute = inject(ActivatedRoute);
  exercise:any = {};

  id:any = this.activatedRoute.snapshot.params['id'];

  constructor(){
    this.workoutService.getExcerciseById(this.id).subscribe({
      next: (data) => {
        this.exercise = data;
        //console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
