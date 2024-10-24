import { Component, inject } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-targets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.scss'
})
export class TargetsComponent {
  private workoutService = inject(WorkoutService);
  private activatedRoute = inject(ActivatedRoute);
  targetList:any = {};

  id:any = this.activatedRoute.snapshot.params['id'];

  constructor(){
    this.workoutService.getTargets().subscribe({
      next: (data) => {
        this.targetList = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
