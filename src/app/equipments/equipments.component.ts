import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { ExcerciseListComponent } from "../excercise-list/excercise-list.component";

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [RouterModule, CommonModule, ExcerciseListComponent],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.scss'
})
export class EquipmentsComponent {
  private workoutService = inject(WorkoutService);
  private activatedRoute = inject(ActivatedRoute);
  equipments:any = [];

  constructor(){
    this.workoutService.getEquipments().subscribe({
      next: (data) => {
        this.equipments = data;
        //console.log(data);  
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
