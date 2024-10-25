import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-excercise-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './excercise-list.component.html',
  styleUrl: './excercise-list.component.scss'
})

export class ExcerciseListComponent {
  @Input() heading = '';
  @Input() excercises:any = [];
}
